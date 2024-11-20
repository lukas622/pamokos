import { useState } from "react";
import "./App.css";

import TaskTracker from "./components/TaskTracker";

function App() {
  const [count, setCount] = useState(0);

  return <TaskTracker />;
}

export default App;
