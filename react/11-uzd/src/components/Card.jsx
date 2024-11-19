import "./Card.css";

export default function Card(props) {
  return (
    <div className="text-left pt-3 pb-3">
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <img id="cardimage" src={props.image} alt="" />
      <p className="mt-3">{props.text}</p>
      <button className="btn btn-dark">Read more</button>
    </div>
  );
}
