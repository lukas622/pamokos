import "./App.css";
import Form from "./components/Form";
import Success from "./components/Success";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
