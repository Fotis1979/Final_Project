import React from "react";
import MyContext from "./MyContext";
import { useState, useEffect, useContext } from "react";
import "../../src/App.css";
import useFetch from "../hooks/useFetch";

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
  const [allAnswers, setAllAnswers] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [incorrect, setIncorrect] = useState();
  const [quest, setQuest] = useState([]);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState("arts");
  const [newQ, setNewQ] = useState();
  const [randomAnswers, setRandomAnswers] = useState([]);
  const [hints, setHints] = useState(0);
  const [lock, setLock] = useState(false);

  const url = `https://the-trivia-api.com/api/questions?limit=50&&categories=${cat}&&difficulty=${diff}`;

  const initialState = { results: null, loading: true, eror: null };
  const { results, loading, eror } = useFetch(url, initialState);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;
  return (
    <MyContext.Provider
      value={{
        lock,
        setLock,
        randomAnswers,
        setRandomAnswers,
        results,
        loading,
        eror,
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
