export default function PostImage(props) {
  return (
    <div>
      <img
        src={props.image}
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover rounded-circle"
      />
    </div>
  );
}
