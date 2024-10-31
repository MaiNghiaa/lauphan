// UserProfile.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name:</label>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Phone Number:
          </label>
          <p className="text-gray-900">{user.phoneNumber}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email:</label>
          <p className="text-gray-900">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Address:</label>
          <p className="text-gray-900">{user.address}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">City:</label>
          <p className="text-gray-900">{user.city}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">District:</label>
          <p className="text-gray-900">{user.district}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Gender:</label>
          <p className="text-gray-900">
            {user.gender === 1 ? "Male" : "Female"}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Role:</label>
          <p className="text-gray-900">{user.role}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Created At:
          </label>
          <p className="text-gray-900">
            {new Date(user.created_at).toLocaleString()}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Updated At:
          </label>
          <p className="text-gray-900">
            {new Date(user.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
