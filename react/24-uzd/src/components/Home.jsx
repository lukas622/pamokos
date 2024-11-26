import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Welcome To The Home Page</h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
