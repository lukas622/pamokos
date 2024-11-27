import { useState, useEffect } from "react";
import Card from "./Card";

export default function Home() {
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
    <div className="row">
      {data.map((user) => {
        return (
          <Card
            key={user.id}
            avatar={user.avatar_url}
            login={user.login}
            id={user.login}
          />
        );
      })}
    </div>
  );
}
