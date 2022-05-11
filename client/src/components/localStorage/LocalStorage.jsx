import React from "react";
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";

const LocalStorage = () => {
  const context = useContext(MyContext);
  const { answers, setAnswers, questionArray, indexCounter } = context;

  useEffect(() => {
    localStorage.setItem(
      "question",
      JSON.stringify(questionArray[indexCounter])
    );
  }, [questionArray, indexCounter]);

  return <div></div>;
};

export default LocalStorage;
