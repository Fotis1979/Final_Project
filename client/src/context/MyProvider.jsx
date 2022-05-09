import React from "react";
import MyContext from "./MyContext";
import { useState, useEffect, useContext } from "react";
import "../../src/App.css";
import useFetch from "../hooks/useFetch";

const MyProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const [rightAnswer, setRightAnswer] = useState();
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [gameMode, setGameMode] = useState();
  const [number, setNumber] = useState(0);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState("arts");
  const [randomAnswers, setRandomAnswers] = useState([]);

  const [hints, setHints] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState();
  const [indexCounter, setIndexCounter] = useState(0);
  const [gameOver, setGameOver] = useState(true);



  const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
  const initialState = { results: null, loading: true, eror: null };
  const { results, loading, eror } = useFetch(url, initialState);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;
  return (
    <MyContext.Provider
      value={{
        indexCounter, 
        setIndexCounter,
        wrongAnswers, 
        setWrongAnswers,
        randomAnswers,
        setRandomAnswers,
        results,
        loading,
        eror,
        cat,
        gameOver,
        setGameOver,
        setCat,
        diff,
        setDiff,
        message,
        setMessage,
        color,
        setColor,
        rightAnswer,
        setRightAnswer,
        score,
        setScore,
       
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
