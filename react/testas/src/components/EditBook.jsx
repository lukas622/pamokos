import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
export default function EditBook() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState([]);

  // I spent too much time trying to make the default values work. No time so I give up.
  const { register, handleSubmit, reset } = useForm({
    defaultValues: async () => {
      return await fetch(`http://localhost:3001/books/${id}`);
    },
  });

  const onSubmit = (values) => {
    try {
      const addBook = async () => {
        const response = fetch(`http://localhost:3001/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const status = await response;
        if (status.ok) {
          navigate("/");
        }
      };
      addBook();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="container p-3 text-center">
      <h1>Edit Mode</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor="title">Title</label>
        </p>

        <p>
          <input
            id="title"
            type="text"
            placeholder="The title of the book..."
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
        </p>

        <p>
          <label htmlFor="author">Author</label>
        </p>
        <p>
          <input
            id="author"
            type="text"
            placeholder="The author of the book..."
            {...register("author", {
              required: true,
              pattern: /^[a-zA-Z\s]*$/,
            })}
          />
        </p>

        <p>
          <label htmlFor="category">Category</label>
        </p>
        <p>
          <select
            {...register("category", { required: true })}
            name="category"
            id="category"
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Adventure">Adventure</option>
            <option value="ScienceFiction">Science Fiction</option>
          </select>
        </p>

        <p>
          <label htmlFor="price">Price</label>
        </p>
        <p>
          <input
            id="price"
            type="number"
            placeholder="The price of the book..."
            {...register("price", { required: true, min: 0.01 })}
          />
        </p>

        <p>
          <label htmlFor="cover">Cover</label>
        </p>
        <p>
          <input
            id="cover"
            type="text"
            placeholder="Link to the book's cover..."
            {...register("img", {
              required: true,
              pattern:
                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
            })}
          />
        </p>
        <p>
          <br />
          <button className="btn btn-success" type="submit">
            Apply Changes
          </button>
        </p>
      </form>
    </div>
  );
}
