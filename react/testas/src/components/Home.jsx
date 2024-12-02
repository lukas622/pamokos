import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3001/books");
        const ndata = await response.json();
        setData(ndata);
      };
      fetchData();
    } catch (error) {
      throw new Error(error.message);
    }
  }, [data]);

  return (
    <div className="container p-5">
      <div className="d-flex flex-row justify-content-start align-items-center align-self-center flex-wrap align-content-start gap-5">
        {data.map((book, index) => (
          <Book
            itsid={book.id}
            name={book.name}
            img={book.img}
            author={book.author}
            price={book.price}
            reserved={book.reserved}
            category={book.category}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
