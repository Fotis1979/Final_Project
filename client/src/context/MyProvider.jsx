import { useEffect } from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "../../src/App.css";

const MyProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [clicked,setClicked]= useState(false)
  const [streak,setStreak]= useState(0)
  const [messageB, setMessageB] = useState();
  const [color, setColor] = useState();
  const [score, setScore] = useState(0);
  const [storedScore, setStoredScore] = useState();
  const [gameMode, setGameMode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(33); 
  const [gameDiff, setGameDiff] = useState()
  const [difficulty, setDifficulty] = useState(["easy", "medium", "hard"]);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState("");
  const [randomAnswers, setRandomAnswers] = useState([]);
  const [hints, setHints] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [questionArray, setQuestionArray] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selected, setSelected] = useState();
  const [rightAnswer, setRightAnswer] = useState([]);
  const [answers, setAnswers] = useState([]);
	const [indexCounter, setIndexCounter] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [answerPopup, setAnswerPopup] = useState(false);


  const [name, setName] = useState("");
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const [highScoreResult, setHighScoreResult] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
  const initialState = { results: null, loading: true, eror: null };
  const { results, loading, eror } = useFetch(url, initialState);

  useEffect(() => {
    if (results !== null ) {
      setQuestionArray(results.map((item) => item.question));
      setWrongAnswers(results.map((item) => item.incorrectAnswers));
      setRightAnswer(results.map((item) => item.correctAnswer));
      
    }
  }, [results]);

  useEffect(()=> {

    console.log("GAMEOVER IS :",gameOver);
  },[indexCounter])

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>'eror'</p>;


  return (
    <MyContext.Provider
      value={{
        highScoreResult,
        setHighScoreResult,
        highScore,
        setHighScore,
gameDiff, 
setGameDiff,    
answers,
clicked,
setClicked,
streak,
setStreak,
selected, 
setSelected,
storedScore,
setStoredScore,
        setAnswers,
        error,
        setError,
        questionArray,
        setQuestionArray,
        indexCounter,
        setIndexCounter,
        wrongAnswers,
        setWrongAnswers,
        seconds,
        setSeconds,
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
        messageB, 
        setMessageB,
        color,
        setColor,
        rightAnswer,
        setRightAnswer,
        score,
        setScore,
        difficulty,
        setDifficulty,
        gameMode,
        setGameMode,
        number,
        setNumber,
        hints,
        setHints,
        email,
        setEmail,
        pass,
        setPass,

        birthDate,
        setBirthDate,
        isProfileSaved,
        setIsProfileSaved,
        loginMsg,
        setLoginMsg,
        name,
        setName,
    	answerPopup,
				setAnswerPopup
      }}
    >
      {children}
    </MyContext.Provider>
  );



};

export default MyProvider;
