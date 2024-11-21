import "./Card.css";

export default function Card(props) {
  return (
    <div className="spCard bg-light">
      <img
        src={"src" + props.logo.slice(1)}
        alt=""
      />

      <div className="textholder">
        <p>{props.company}</p>
        <b>{props.position}</b>
        <br />
        <span>{props.postedAt + " |"}</span>{" "}
        <span>{props.contract + " |"}</span> <span>{" " + props.location}</span>
      </div>
    </div>
  );
}
