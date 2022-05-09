import React from "react";
import { useContext } from "react";
import MyContext from "../../../context/MyContext";
const Hints = () => {
  const context = useContext(MyContext);
  const { hints } = context;

  return (
    <div className="counter-hints">
      <label>hints : </label>
      <span>{hints}</span>
    </div>
  );
};

export default Hints;
