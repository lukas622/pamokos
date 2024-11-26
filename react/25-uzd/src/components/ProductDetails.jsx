import { useParams } from "react-router";
import { Link } from "react-router";
export default function ProductDetails() {
  const { id } = useParams();
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];

  const product = products.find((pr) => {
    return Number(pr.id) === Number(id);
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}
