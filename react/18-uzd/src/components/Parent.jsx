import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [items, setItems] = useState(["React", "JavaScript", "CSS"]);

  return (
    <div>
      <h1>Items List</h1>
      <Child itemList={items} />
    </div>
  );
}
