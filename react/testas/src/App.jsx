import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import RegisterBook from "./components/RegisterBook";
import EditBook from "./components/EditBook";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<EditBook />} />
          <Route path="/newbook" element={<RegisterBook />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
