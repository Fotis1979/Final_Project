import React from "react";
import "../../../styling/rewards.css";
import Counter from "../question/Counter";
import Hints from "./Hints";
const Rewards = () => {
  return (
    <div>
      <div className="rewards-main-section">
        <Counter />
        <Hints />
      </div>
    </div>
  );
};

export default Rewards;
