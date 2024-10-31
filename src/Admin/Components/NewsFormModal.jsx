// NewsFormModal.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewsFormModal({
  editData,
  onClose,
  onSave,
  existingNews,
}) {
  const [formData, setFormData] = useState(
    editData || { tag: "", title: "", description: "", img: "" }
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // Set preview URL for existing image if editing
    if (editData && editData.img) {
      setPreviewUrl(`http://localhost:3000/images/${editData.img}`);
    }
  }, [editData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = { ...formData };
    if (selectedFile) {
      const uploadData = new FormData();
      uploadData.append("image", selectedFile);
      const uploadResponse = await axios.post(
        "http://localhost:3000/upload",
        uploadData
      );
      newData.img = uploadResponse.data.fileName; // Get the filename from the response
    }

    try {
      if (editData) {
        await axios.put(`http://localhost:3000/News/${editData.id}`, newData);
        onSave(
          existingNews.map((item) => (item.id === editData.id ? newData : item))
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/News",
          newData
        );
        onSave([...existingNews, response.data]);
      }
    } catch (error) {
      alert("Failed to save changes");
    } finally {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">
          {editData ? "Edit News" : "Add News"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleInputChange}
            placeholder="Tag"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          ></textarea>

          {/* File Input and Preview */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
          {selectedFile && (
            <p className="text-sm text-gray-600 mt-1">
              Selected file: {selectedFile.name}
            </p>
          )}
          {previewUrl && (
            <div className="mt-3">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-32 object-cover rounded"
              />
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
