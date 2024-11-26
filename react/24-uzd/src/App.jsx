import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
