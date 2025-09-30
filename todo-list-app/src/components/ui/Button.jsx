import React from "react";

export default function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ margin: "1rem 0" }}>
      {label}
    </button>
  );
}
