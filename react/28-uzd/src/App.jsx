import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setData(data);
      } catch (err) {
        return <p className="text-danger">{err.message}</p>;
      }
    };
    fetchData();
  }, []);

  return (
    <main className="container">
      <div className="row">
        {data.map((user) => {
          return <Card avatar={user.avatar_url} login={user.login} />;
        })}
      </div>
    </main>
  );
}

export default App;
