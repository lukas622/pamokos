import "./App.css";
import UserInfo from "./components/UserInfo";
import Home from "./components/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserInfo />} />
      </Routes>
    </main>
  );
}

export default App;
