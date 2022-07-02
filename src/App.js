import React, { useState } from "react";
import "./App.css";

const App = () => {
  const color = "#8e44ad";
  let time = new Date().toLocaleTimeString();
  const [bg, setBg] = useState(color);
  const [name, setName] = useState("Mouse Hover");
  const [cTime, setcTime] = useState(time);

  const buttonclick = () => {
    let newBg = "#ad9644";
    setBg(newBg);
    setName("Mouse Hover");
  };
  const buttonClick2 = () => {
    setBg(color);
    setName("normal");
  };
  const changetime = () => {
    let time = new Date().toLocaleTimeString();
    setcTime(time);
  };
  setInterval(changetime, 1000);

  return (
    <div
      style={{
        backgroundColor: bg,
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <button onMouseEnter={buttonclick} onMouseLeave={buttonClick2}>
        <h1>{name}</h1>
      </button>

      <hr />

      <h1>{cTime}</h1>
    </div>
  );
};

export default App;
