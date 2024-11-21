import { useState } from "react";
import TaskList from "./TaskList";

export default function TaskTracker() {
  const [tasks, setTask] = useState([]);

  const addTask = () => {
    const task = prompt("Enter the task:");
    const newTask = { text: task, completed: false };
    setTask((tasks) => [...tasks, newTask]);
  };

  return (
    <div className="container bg-primary">
      <h1 className="text-light">Task Tracker</h1>
      <button
        className="btn btn-success"
        onClick={addTask}
      >
        Add Task
      </button>
      <TaskList
        taskTable={tasks}
        sTask={setTask}
      />
    </div>
  );
}
