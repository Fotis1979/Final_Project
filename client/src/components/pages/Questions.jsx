import React from "react";
import QuestionBodyWithTime from "../singleplayer/question/QuestionBodyWithTime";
import Rewards from "../singleplayer/rewards/Rewards";
import Nav from "./Nav";
const Questions = () => {
  return (
    <div>
      <Nav />
      <Rewards />
      <QuestionBodyWithTime />
    </div>
  );
};

export default Questions;
