import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </main>
  );
}

export default App;
