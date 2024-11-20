import { useState } from "react";
import TaskList from "./TaskList";

export default function TaskTracker() {
  const [tasks, setTask] = useState([]);

  const addTask = () => {
    const task = prompt("Enter the task:");
    setTask(() => tasks.push(task));
    console.log(tasks);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <button onClick={addTask}>Add Task</button>
      <TaskList taskTable={tasks} />
    </div>
  );
}
