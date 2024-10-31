// import React from "react";

// export default function EditModal() {
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full">
//         <h2 className="text-lg font-semibold mb-4">Sửa Thông Tin</h2>
//         <input
//           type="text"
//           name="restaurant"
//           value={editData.restaurant}
//           onChange={handleInputChange}
//           placeholder="Nhà Hàng"
//           className="w-full p-2 mb-3 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="peopleCount"
//           value={editData.peopleCount}
//           onChange={handleInputChange}
//           placeholder="Số Người"
//           className="w-full p-2 mb-3 border border-gray-300 rounded"
//         />
//         {/* Add other input fields as needed */}
//         <button
//           onClick={handleSaveChanges}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
//         >
//           Lưu Thay Đổi
//         </button>
//         <button
//           onClick={() => setIsModalOpen(false)}
//           className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//         >
//           Đóng
//         </button>
//       </div>
//     </div>
//   );
// }
