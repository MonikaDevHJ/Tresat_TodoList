// src/context/TaskContext.tsx
"use client";

import { Task } from "@/types/Task";
import React, { createContext, useReducer, useContext, useEffect } from "react";


type TaskAction =
    | { type: "ADD"; payload: Task }
    | { type: "DELETE"; payload: string }
    | { type: "UPDATE"; payload: Task };

type TaskState = Task[];

const TaskContext = createContext<{
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
}>({ state: [], dispatch: () => null });

function taskReducer(state: TaskState, action: TaskAction): TaskState {
    switch (action.type) {
        case "ADD":
            return [action.payload, ...state];
        case "DELETE":
            return state.filter((task) => task.id !== action.payload);
        case "UPDATE":
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        default:
            return state;
    }
}

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(taskReducer, [], () => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    // Save to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state));
    }, [state]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => useContext(TaskContext);
