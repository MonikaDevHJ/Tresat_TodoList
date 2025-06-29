# 📋 Task Manager App – Tresata Frontend Assessment

This is a task management app built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It allows users to create, update, delete, and filter tasks based on their status. The UI is inspired by the provided Figma design.

🔗 **Live Demo:** [Click here](https://vercel.com/monika-h-js-projects/tresat-todo-list)

---

## ✅ Features

- ➕ Add New Tasks
- 📝 Edit Existing Tasks
- 🗑️ Delete Tasks
- 🔄 Update Task Status (Pending / In Progress / Completed)
- 🔍 Filter Tasks by Status
- 💾 Data persistence using LocalStorage
- ⚙️ State Management via `useReducer` and `Context API`
- 🎨 Fully responsive with Tailwind CSS

---

## 🛠 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid) – For unique task IDs
- React Context + useReducer – For global state

---

## 📂 Project Structure

/app
└── page.tsx # Home page (Task Manager)
/src
/component
├── AddTaskForm.tsx # Form to add/edit tasks
├── FloatingButton.tsx # + Button to open form
└── TaskList.tsx # Renders list of tasks
/context
└── TaskContext.tsx # Global task state with useReducer
/types
└── Task.ts # Task type definition

