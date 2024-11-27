import { Link } from "react-router";
export default function Card(props) {
  return (
    <div className="col-lg-4">
      <img
        src={props.avatar}
        alt=""
        width={140}
        height={140}
        className="bd-placeholder-img rounded-circle"
      />
      <h2 className="fw-normal">{props.login}</h2>
      <p>
        <Link className="btn btn-secondary" to={"users/" + props.id}>
          View Details
        </Link>
      </p>
    </div>
  );
}
