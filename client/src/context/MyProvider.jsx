import React from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import "../../src/App.css";

const MyProvider = ({ children }) => {
  const [questions, setQuestions] = useState();
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const [wrightAnswer, setWrightAnswer] = useState();
  const [score, setScore] = useState(0);
  const [newQuestion, setNewQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [g, setG] = useState(false);
  const [error, setError] = useState (false);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [gameMode, setGameMode] = useState();
  const [number, setNumber] = useState();

  return (
    <MyContext.Provider
      value={{
        questions,
        setQuestions,
        message,
        setMessage,
        color,
        setColor,
        wrightAnswer,
        setWrightAnswer,
        score,
        setScore,
        newQuestion,
        setNewQuestion,
        gameOver,
        setGameOver,
        g,
        setG,
        error,
        setError,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        gameMode,
        setGameMode,
        number,
        setNumber
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
