// AccountsManagement.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AccountsManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data.users);
      } catch (error) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handlers for actions
  const handleEdit = (user) => {
    alert(`Edit user with ID: ${user.id}`);
    // Implement edit logic here
  };

  const handleSetDefaultPassword = async (userId) => {
    try {
      await axios.put(
        `http://localhost:3000/users/${userId}/set-default-password`
      );
      alert("Password reset to default successfully");
    } catch (error) {
      alert("Failed to reset password");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      alert("Failed to delete the user");
    }
  };

  const handleAddAccount = () => {
    alert("Add new account");
    // Implement add new account logic here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <button
        onClick={handleAddAccount}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        Add New Account
      </button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">City</th>
            <th className="px-4 py-2 border">District</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center border-t">
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.phoneNumber}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">
                {user.gender === 1 ? "Male" : "Female"}
              </td>
              <td className="px-4 py-2 border">{user.address}</td>
              <td className="px-4 py-2 border">{user.city}</td>
              <td className="px-4 py-2 border">{user.district}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleSetDefaultPassword(user.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Set Password
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
