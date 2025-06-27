"use client";
import React, { useState } from "react";

interface Props {
  onCancel: () => void;
  onAdd: (task: { title: string; description: string; status: string }) => void;
  editData?: {
    title: string;
    description: string;
    status: string;
  };
  isEdit?: boolean;
}

const AddTaskForm: React.FC<Props> = ({ onCancel, onAdd, editData, isEdit }) => {
  const [title, setTitle] = useState(editData?.title || "");
  const [description, setDescription] = useState(editData?.description || "");
  const [status, setStatus] = useState(editData?.status || "Pending");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {isEdit ? "Edit Task" : "Add New Task"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={() => {
              onAdd({ title, description, status });
              onCancel();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
