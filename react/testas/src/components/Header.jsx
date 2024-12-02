import "./Header.css";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <header className="bg-primary">
      <NavLink to="/" className="text-warning">
        <button className="btn btn-success">Home</button>
      </NavLink>
      <NavLink to="/newbook" className="text-warning">
        <button className="btn btn-warning">Register a new book</button>
      </NavLink>
    </header>
  );
}
