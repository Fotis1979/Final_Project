import { useContext, useState } from "react";
import MyContext from "../../../context/MyContext";

const Hints = () => {
  const context = useContext(MyContext);

  const { hints, setHints } = context;

  return (
    <div className="rewards--btn">
      <label>HINTS : </label>
      <span>{hints}</span>
    </div>
  );
};

export default Hints;
