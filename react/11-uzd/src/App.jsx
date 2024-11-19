import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime labore
        perspiciatis illum itaque, sapiente dolorem in, molestias ipsa deleniti
        hic facilis dolor architecto omnis nobis magni nam voluptates expedita
        assumenda?"
          image="src/assets/img1.png"
          date="September 8, 2018"
          title="The Fastest WordPress Theme"
        />
        <Card
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime labore
        perspiciatis illum itaque, sapiente dolorem in, molestias ipsa deleniti
        hic facilis dolor architecto omnis nobis magni nam voluptates expedita
        assumenda?"
          image="src/assets/img2.png"
          date="September 8, 2018"
          title="Top 10 Contact Form Plugins"
        />
        <Card
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime labore
        perspiciatis illum itaque, sapiente dolorem in, molestias ipsa deleniti
        hic facilis dolor architecto omnis nobis magni nam voluptates expedita
        assumenda?"
          image="src/assets/img3.png"
          date="September 8, 2018"
          title="3 Awesome Security Plugins for WordPress"
        />
      </div>
      <Info />
    </>
  );
}

export default App;
