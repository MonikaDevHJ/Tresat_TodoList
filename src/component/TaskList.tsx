// ✅ TaskList.tsx
"use client";
import React from "react";
import { useTask } from "@/context/TaskContext";
import { Task } from "@/types/Task";

interface Props {
  onEdit: (task: Task) => void;
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ onEdit, tasks }) => {
  const { dispatch } = useTask();

  if (tasks.length === 0) {
    return <p className="text-gray-600 mt-6">No tasks found.</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 shadow-md rounded border-l-4 border-blue-500 hover:shadow-lg transition-all relative"
        >
          <button
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
            onClick={() => dispatch({ type: "DELETE", payload: task.id })}
          >
            🗑️
          </button>

          <button
            className="absolute top-2 right-10 text-green-500 hover:text-green-700 text-sm"
            onClick={() => onEdit(task)}
          >
            ✏️
          </button>

          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span>Status: <b>{task.status}</b></span>
            <span>{task.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
