import React, { useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Task from "./components/ui/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>To-Do List</h1>
      <Input value={input} onChange={setInput} />
      <Button onClick={addTask} label="Add Task" />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} text={task} onDelete={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}
