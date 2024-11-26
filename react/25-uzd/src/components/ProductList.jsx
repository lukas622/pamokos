import { Link } from "react-router";
export default function ProductList() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((obj, index) => (
          <li key={index}>
            <Link to={"/product/" + obj.id}>{obj.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
