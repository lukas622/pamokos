export default function Child(props) {
  return (
    <ul>
      {props.itemList.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
