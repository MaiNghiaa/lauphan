import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [editData, setEditData] = useState({
    restaurant: "",
    peopleCount: "",
    Day: "",
    Hour: "",
    Name: "",
    phoneNumber: "",
    Note: "",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:3000/Booking");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = (await response.json()).data;
        setBookings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const countByStatus = {
    pending: bookings.filter((booking) => booking.status === "chờ xử lí")
      .length,
    completed: bookings.filter((booking) => booking.status === "thành công")
      .length,
    cancelled: bookings.filter((booking) => booking.status === "Hủy").length,
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchStatus =
      filterStatus === "all" || booking.status === filterStatus;
    const matchName = booking.Name.toLowerCase().includes(
      searchName.toLowerCase()
    );
    return matchStatus && matchName;
  });

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBookings = filteredBookings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/Booking/Update/${id}`,
        {
          status: newStatus,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update status");
      }

      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (error) {
      alert(`Error updating status: ${error.message}`);
    }
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setEditData(booking); // Set the form data to the booking's current data
    setIsModalOpen(true); // Open the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/Booking/Update/${currentBooking.id}`,
        editData
      );

      if (response.status !== 200) {
        throw new Error("Failed to update booking");
      }

      // Update local state
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === currentBooking.id
            ? { ...booking, ...editData }
            : booking
        )
      );

      // Close modal
      setIsModalOpen(false);
    } catch (error) {
      alert(`Error saving changes: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Summary Section */}
      <div className="mb-6 flex justify-between">
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded">
          Đơn Chờ Xử Lí:{" "}
          <span className="font-semibold">{countByStatus.pending}</span>
        </div>
        <div className="bg-green-100 text-green-700 p-4 rounded">
          Đơn Thành Công:{" "}
          <span className="font-semibold">{countByStatus.completed}</span>
        </div>
        <div className="bg-red-100 text-red-700 p-4 rounded">
          Đơn Hủy:{" "}
          <span className="font-semibold">{countByStatus.cancelled}</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-4 flex gap-4">
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="chờ xử lí">Chờ xử lí</option>
          <option value="thành công">Thành công</option>
          <option value="Hủy">Hủy</option>
        </select>

        <input
          type="text"
          placeholder="Tìm theo tên"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto max-h-screen">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 border-r whitespace-nowrap">ID</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Nhà Hàng</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Số Người</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Ngày</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Giờ</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Tên</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">
                Số Điện Thoại
              </th>
              <th className="px-4 py-2 border-r whitespace-nowrap">Ghi Chú</th>
              <th className="px-4 py-2 border-r whitespace-nowrap">
                Trạng Thái
              </th>
              <th className="px-4 py-2 border-r whitespace-nowrap">
                Hành Động
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBookings.map((booking) => (
              <tr
                key={booking.id}
                className="text-center border-b hover:bg-gray-50"
              >
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.id}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.restaurant}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.peopleCount}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.Day}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.Hour}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.Name}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.phoneNumber}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  {booking.Note}
                </td>
                <td className="px-4 py-2 border-r whitespace-nowrap">
                  <span
                    className={
                      booking.status === "thành công"
                        ? "text-green-500 font-semibold"
                        : booking.status === "Hủy"
                        ? "text-red-500 font-semibold"
                        : "text-yellow-500 font-semibold"
                    }
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2 justify-center whitespace-nowrap">
                  {booking.status === "chờ xử lí" ? (
                    <>
                      <button
                        onClick={() => updateStatus(booking.id, "thành công")}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Thành Công
                      </button>
                      <button
                        onClick={() => updateStatus(booking.id, "Hủy")}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Hủy
                      </button>
                      {/* <button
                    onClick={() => handleEdit(booking)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Sửa Thông Tin
                  </button> */}
                    </>
                  ) : (
                    " "
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        // <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        //   <div className="bg-white p-6 rounded-lg max-w-md w-full">
        //     <h2 className="text-lg font-semibold mb-4">Sửa Thông Tin</h2>
        //     <input
        //       type="text"
        //       name="restaurant"
        //       value={editData.restaurant}
        //       onChange={handleInputChange}
        //       placeholder="Nhà Hàng"
        //       className="w-full p-2 mb-3 border border-gray-300 rounded"
        //     />
        //     <input
        //       type="number"
        //       name="peopleCount"
        //       value={editData.peopleCount}
        //       onChange={handleInputChange}
        //       placeholder="Số Người"
        //       className="w-full p-2 mb-3 border border-gray-300 rounded"
        //     />
        //     {/* Add other input fields as needed */}
        //     <button
        //       onClick={handleSaveChanges}
        //       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        //     >
        //       Lưu Thay Đổi
        //     </button>
        //     <button
        //       onClick={() => setIsModalOpen(false)}
        //       className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        //     >
        //       Đóng
        //     </button>
        //   </div>
        // </div>
        <></>
      )}
    </div>
  );
}
