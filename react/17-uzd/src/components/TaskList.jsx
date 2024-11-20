export default function TaskList(props) {
  const res = props.taskTable.map((task, index) => {
    <li key={index}>{task}</li>;
  });
  return <ul>{res}</ul>;
}
