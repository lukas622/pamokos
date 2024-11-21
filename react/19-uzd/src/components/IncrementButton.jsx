export default function IncrementButton(props) {
  return (
    <button onClick={() => props.countFunc(props.count + 1)}>Increment</button>
  );
}
