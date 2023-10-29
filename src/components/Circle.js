import { useEffect, useState } from "react";
import "./Circle.css"

const Circle = ({ onClick }) => {
    const randomX = () => Math.random() * (document.body.scrollWidth - 200) + 100;
    const randomY = () => Math.random() * (document.body.scrollHeight - 200) + 100;
  const [x, setX] = useState(randomX());
  const [y, setY] = useState(randomY());

  const teleport = () => {
    setX(randomX()); 
    setY(randomY()); 
    let circle = document.querySelector(".circle");

    circle.style.animationName = "none";

    requestAnimationFrame(() => {
      setTimeout(() => {
        circle.style.animationName = ""
      }, 0);
    });
    onClick();
  };

  return <div className="circle" style={{
    left: `${x}px`,
    top: `${y}px`,
  }} onClick={teleport}></div>;
};

export default Circle;
