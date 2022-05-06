import React from "react";
import MyContext from "./MyContext";
import { useState, useEffect, useContext } from "react";
import "../../src/App.css";


const MyProvider = ({ children }) => {
  const [questions, setQuestions] = useState();
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const [rightAnswer, setRightAnswer] = useState();
  const [score, setScore] = useState(0);
  const [newQuestion, setNewQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lock, setLock] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [gameMode, setGameMode] = useState();
  const [number, setNumber] = useState();
  const [allAnswers, setAllAnswers] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [incorrect, setIncorrect] = useState();
  const [quest, setQuest] = useState([]);
  const [diff, setDiff] = useState();
  const [cat, setCat] = useState()
  const [newQ, setNewQ] = useState()
  
  const [hints, setHints] = useState(0);



  
  return (
    <MyContext.Provider
      value={{
        newQ,
        setNewQ,
        cat, 
        setCat,
        diff, 
        setDiff,
        quest, 
        setQuest,
        incorrect, 
        setIncorrect,
        correctAnswer,
        setCorrectAnswer, 
        allAnswers,
        setAllAnswers,
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
        lock,
        setLock,
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
