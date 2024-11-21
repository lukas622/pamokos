import { useState } from "react";
import "./App.css";
import data from "./data/data.json";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="holder">
      <Header />

      {data.map((info) => (
        <Card
          company={info.company}
          position={info.position}
          postedAt={info.postedAt}
          contract={info.contract}
          location={info.location}
          logo={info.logo}
          key={info.id}
        />
      ))}
    </div>
  );
}

export default App;
