import "./Header.css";

import bigDog from "../assets/dog.jpg";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src={bigDog}
        alt="A dog"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
