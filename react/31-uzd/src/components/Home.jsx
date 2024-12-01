import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, [data]);

  return (
    <div className="bg-slate-200 border-2 border-t-0 border-slate-600">
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  ID
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Due Date
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {task.id}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {task.name}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {task.date}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Link
                    className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                    to={"/tasks/" + task.id}
                  >
                    Edit
                  </Link>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();

                      const item = data.filter((item) => task.id == item.id);

                      const updateData = async (data) => {
                        try {
                          const response = await fetch(
                            `http://localhost:3000/tasks/${task.id}`,
                            {
                              method: "DELETE",
                              headers: {
                                "Content-type": "application/json",
                              },
                            }
                          );

                          if (response.ok) {
                            setData(data);
                          }
                        } catch (error) {}
                      };

                      updateData(data);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
