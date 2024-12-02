import { useState } from "react";
import { Link } from "react-router";
import "./Book.css";
export default function Book(props) {
  const [data, setData] = useState([]);
  const reserveBook = (props) => {
    try {
      const updateBook = async () => {
        const response = await fetch(
          `http://localhost:3001/books/${props.itsid}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              reserved: !props.reserved,
              name: props.name,
              author: props.author,
              price: props.price,
              img: props.img,
              category: props.category,
            }),
          }
        );
        if (response.ok) {
          setData([]);
        }
      };
      updateBook();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const deleteBook = (props) => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:3001/books/${props.itsid}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          setData([]);
        }
      };
      fetchData();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="bg-light text-center p-3 rounded">
      <p>
        <img src={props.img} alt="Book Image" />
      </p>
      <b>{props.name}</b>
      <p>{props.author}</p>
      <p>{props.category}</p>
      <p>{"$" + props.price}</p>
      <p>
        <button onClick={() => reserveBook(props)} className="btn btn-primary">
          {props.reserved ? "Return" : "Give to reader"}
        </button>
      </p>
      <p>
        <Link to={`/books/${props.itsid}`}>
          <button className="btn btn-warning">Edit</button>
        </Link>
      </p>
      <p>
        <button onClick={() => deleteBook(props)} className="btn btn-danger">
          Remove
        </button>
      </p>
    </div>
  );
}
