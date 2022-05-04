import React from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import "../../src/App.css";

const MyProvider = ({ children }) => {
  const [questions, setQuestions] = useState();
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const [rightAnswer, setRightAnswer] = useState();
  const [score, setScore] = useState(0);
  const [newQuestion, setNewQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [g, setG] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [gameMode, setGameMode] = useState();
  const [number, setNumber] = useState();
  const [hints, setHints] = useState(0);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState("arts");

  return (
    <MyContext.Provider
      value={{
        cat,
        setCat,
        diff,
        setDiff,
        questions,
        setQuestions,
        message,
        setMessage,
        color,
        setColor,
        rightAnswer,
        setRightAnswer,
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
        setNumber,
        hints,
        setHints,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
