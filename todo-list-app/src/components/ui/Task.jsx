import React from "react";
import Button from "./Button";

export default function Task({ text, onDelete }) {
  return (
    <li>
      {text} <Button onClick={onDelete} label="Delete" />
    </li>
  );
}
