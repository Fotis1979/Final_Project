import { useEffect } from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "../../src/App.css";

const MyProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [clicked, setClicked] = useState(false);
  const [streak, setStreak] = useState(0);
  const [messageB, setMessageB] = useState();
  const [color, setColor] = useState();
  const [score, setScore] = useState(0);
  const [storedScore, setStoredScore] = useState();
  const [gameMode, setGameMode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(33);
  const [gameDiff, setGameDiff] = useState();
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
  const [sec, setSec] = useState(0);
  const [userName, setUserName] = useState("");
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
  );
  const [avatarFile, setAvatarFile] = useState();
  const [birthDate, setBirthDate] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [highScoreResult, setHighScoreResult] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
  const initialState = { results: null, loading: true, eror: null };
  const { results, loading, eror } = useFetch(url, initialState);
  const [categories, setCategories] = useState([
    "arts",
    "general",
    "film",
    "food",
    "geography",
    "history",
    "music",
    "science",
    "society",
    "sport",
  ]);

  //Diamond part

  const [pie, setPie] = useState(false);
  const [diamonds, setDiamonds] = useState(0);
  const [diamondGeo, setDiamondGeo] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondArts, setDiamondArts] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondGen, setDiamondGen] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondHist, setDiamondHist] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondSport, setDiamondSport] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondMus, setDiamondMus] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondFood, setDiamondFood] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondSoc, setDiamondSoc] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondSci, setDiamondSci] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [diamondFilm, setDiamondFilm] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const [img, setImg] = useState();

  useEffect(() => {
    if (results !== null) {
      setQuestionArray(results.map((item) => item.question));
      setWrongAnswers(results.map((item) => item.incorrectAnswers));
      setRightAnswer(results.map((item) => item.correctAnswer));
    }
  }, [results]);

  useEffect(() => {
    console.log("GAMEOVER IS :", gameOver);
  }, [indexCounter]);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>'eror'</p>;

  return (
    <MyContext.Provider
      value={{
        sec,
        categories,
        setCategories,
        setSec,
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
        avatarUrl,
        setAvatarUrl,
        avatarFile,
        setAvatarFile,
        loginMsg,
        setLoginMsg,
        userName,
        setUserName,
        answerPopup,
        setAnswerPopup,
        //diamond part
        diamondSoc,
        setDiamondSoc,
        diamondSci,
        setDiamondSci,
        diamondFilm,
        setDiamondFilm,
        diamondFood,
        setDiamondFood,
        diamondMus,
        setDiamondMus,
        diamondSport,
        setDiamondSport,
        diamondHist,
        setDiamondHist,
        diamondGen,
        setDiamondGen,
        diamondArts,
        setDiamondArts,
        diamondGeo,
        setDiamondGeo,
        diamonds,
        setDiamonds,
        pie,
        setPie,
        img,
        setImg,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
