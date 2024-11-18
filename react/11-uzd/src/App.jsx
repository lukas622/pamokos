import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import CardOne from "./components/CardOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CardOne />
    </>
  );
}

export default App;
