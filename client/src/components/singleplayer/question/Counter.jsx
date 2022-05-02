import React from "react";
import { useEffect, useContext } from "react";
import MyContext from "../../../context/MyContext";

const Counter = () => {
  const context = useContext(MyContext);
  const {
    color,

    score,
    setScore,
    newQuestion,
  } = context;
  useEffect(() => {
    color === "green" && newQuestion === false && setScore((prev) => prev + 10);
  }, [color]);

  return (
    <div className="Counter">
      <label>SCORE : </label>
      <span>{score}</span>
    </div>
  );
};

export default Counter;
