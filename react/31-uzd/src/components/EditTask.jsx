import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

export default function EditTask(props) {
  const [data, setData] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`);
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, [data]);

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="bg-white border-2 border-t-0 border-slate-600">
      <form
        className="p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Name
        </label>
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Name of your task here..."
          id="name"
          {...register("name", {
            required: true,
          })}
        />
        <label
          htmlFor="duedate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-4"
        >
          Due date
        </label>
        <input
          type="date"
          id="duedate"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          {...register("date", {
            required: true,
          })}
        />
        <button
          className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-4"
          type="submit"
        >
          Submit Edit
        </button>
      </form>
    </div>
  );
}
