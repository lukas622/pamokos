import { useState } from "react";
export default function Card() {
  const [taskDone, setTaskDone] = useState(false);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {taskDone ? "Task is done!" : "Task is not done!"}
        </h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius sunt
          beatae laborum cupiditate expedita, magnam, labore impedit totam
          animi, ab harum adipisci facilis. Facere error deleniti aspernatur
          quaerat ad. Quam.
        </p>
        <a
          href="#"
          onClick={() => setTaskDone(!taskDone)}
          className={taskDone ? "btn btn-success" : "btn btn-danger"}
        >
          {taskDone ? "Done" : "Mark as done"}
        </a>
      </div>
    </div>
  );
}
