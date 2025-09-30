import React from "react";

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter task"
      style={{ marginRight: "1rem" }}
    />
  );
}
