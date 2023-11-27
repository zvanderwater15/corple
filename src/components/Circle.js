import { useEffect, useState } from "react";
import "./Circle.css"


const Circle = ({ onClick, decayTimeInMs }) => {
  const diameter = 100;
  const randomX = () => Math.random() * (document.body.scrollWidth - diameter);
  const randomY = () => Math.random() * (document.body.scrollHeight - diameter);
  const [x, setX] = useState(randomX());
  const [y, setY] = useState(randomY());

  const teleport = () => {
    setX(randomX()); 
    setY(randomY()); 

    // reset animation
    let circle = document.querySelector(".circle");

    circle.style.animation = "none";

    requestAnimationFrame(() => {
      setTimeout(() => {
        circle.style.animation = `color_change ${decayTimeInMs}ms 1`
      }, 0);
    });
    onClick();
  };

  return <div className="circle" style={{
    left: `${x}px`,
    top: `${y}px`,
    width: `${diameter}px`,
    height: `${diameter}px`,
  }} onClick={teleport}></div>;
};

export default Circle;
