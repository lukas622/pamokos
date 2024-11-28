import { useState } from "react";
import { NavLink, Route, Routes } from "react-router";
import "./App.css";

import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:mx-64 md:mx-32">
      <header>
        <nav>
          <button className="bg-indigo-500 w-full text-white border-2 border-slate-600">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="bg-indigo-500 w-full text-white border-2 border-l-0 border-slate-600">
            <NavLink to="/addtask">Add Task</NavLink>
          </button>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/addtask"
            element={<AddTask />}
          />
          <Route
            path="/tasks/:id"
            element={<EditTask />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
