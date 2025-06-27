"use client";
import { useState } from "react";
import FloatingButton from "@/component/FloatingButton";
import AddTaskForm from "@/component/AddTaskForm";
import { useTask } from "@/context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { TaskStatus, Task } from "@/types/Task";
import TaskList from "@/component/TaskList";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<null | Task>(null);
  const [filter, setFilter] = useState<"All" | TaskStatus>("All");

  const { state, dispatch } = useTask();

  const handleAdd = (taskData: {
    title: string;
    description: string;
    status: string;
  }) => {
    if (editData) {
      const updatedTask: Task = {
        ...editData,
        title: taskData.title,
        description: taskData.description,
        status: taskData.status as TaskStatus,
        date: new Date().toDateString(),
      };
      dispatch({ type: "UPDATE", payload: updatedTask });
      setEditData(null);
    } else {
      const newTask: Task = {
        id: uuidv4(),
        title: taskData.title,
        description: taskData.description,
        status: taskData.status as TaskStatus,
        date: new Date().toDateString(),
      };
      dispatch({ type: "ADD", payload: newTask });
    }
  };

  const filteredTasks = state.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {["All", "Pending", "In Progress", "Completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "All" | TaskStatus)}
            className={`px-3 py-1 rounded ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Add/Edit Task Form */}
      {showForm && (
        <AddTaskForm
          onCancel={() => {
            setShowForm(false);
            setEditData(null);
          }}
          onAdd={handleAdd}
          editData={editData ?? undefined}
          isEdit={!!editData}
        />
      )}

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onEdit={(task) => {
          setEditData(task);
          setShowForm(true);
        }}
      />

      {/* Floating + Button */}
      <FloatingButton onClick={() => setShowForm(true)} />
    </div>
  );
}
