import "./Header.css";

import menuIcon from "../assets/align-justify.svg";

export default function Header() {
  return (
    <header className="bg-dark d-flex flex-row justify-content-around align-items-center align-content-center">
      <h1 className="text-light">Marketer</h1>
      <img src={menuIcon} alt="" />
    </header>
  );
}
