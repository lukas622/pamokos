export default function TaskList(props) {
  const ToggleTask = (index) => {
    const updatedTasks = [...props.taskTable];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    props.sTask(updatedTasks);
  };
  const UndoTask = (index) => {
    const updatedTasks = props.taskTable.filter((task, i) => i !== index);
    props.sTask(updatedTasks);
  };
  console.log(props.taskTable);
  return (
    <ul>
      <p className="text-light">{props.taskTable[0] ? "" : "No tasks yet!"}</p>
      {props.taskTable.map((task, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            className="text-light mr-2"
          >
            {task.text}
          </span>
          <button
            className={
              props.taskTable[index].completed
                ? "btn btn-warning"
                : "btn btn-success"
            }
            onClick={() => ToggleTask(index)}
          >
            {props.taskTable[index].completed ? "Undo" : "Done"}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => UndoTask(index)}
          >
            Delete Task
          </button>
        </li>
      ))}
    </ul>
  );
}
