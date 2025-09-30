// src/components/ui/button.jsx
import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      style={{
        padding: "8px 16px",
        backgroundColor: "#4f46e5",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
