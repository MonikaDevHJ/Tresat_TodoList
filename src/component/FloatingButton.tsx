"use client";
import React from "react";

interface Props {
  onClick: () => void;
}

const FloatingButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg text-2xl"
    >
      +
    </button>
  );
};

export default FloatingButton;
