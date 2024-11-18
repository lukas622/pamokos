import "./Cards.css";

import cardImage from "../assets/img1.png";

export default function CardOne() {
  return (
    <div className="text-left p-3">
      <h1>The Fastest WordPress Theme</h1>
      <p>September 8, 2018</p>
      <img src={cardImage} alt="" />
      <p className="mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime labore
        perspiciatis illum itaque, sapiente dolorem in, molestias ipsa deleniti
        hic facilis dolor architecto omnis nobis magni nam voluptates expedita
        assumenda?
      </p>
      <button className="btn btn-dark">Read more</button>
    </div>
  );
}
