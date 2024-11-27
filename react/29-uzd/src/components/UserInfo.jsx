import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function UserInfo() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${id}`);
        const data = await response.json();
        setData(data);
      } catch (err) {
        return <p className="text-danger">{err.message}</p>;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container text-center p-5">
      <img
        width={140}
        height={140}
        className="rounded-circle"
        src={data?.avatar_url}
        alt=""
      />
      <h1>{data?.login}</h1>
      <p>{"ID: " + data?.id}</p>
      <p>{"Type: " + data?.type}</p>
      <p>{"Admin: " + (data?.site_admin ? "yes" : "no")}</p>
    </div>
    // <p></p>
  );
}
