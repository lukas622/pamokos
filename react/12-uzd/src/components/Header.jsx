import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <h1 className="header-title">{props.header}</h1>
      <img
        src={props.image}
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
