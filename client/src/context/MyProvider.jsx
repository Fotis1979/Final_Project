import { useEffect } from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import "../../src/App.scss";
import useFetch from "../hooks/useFetch";
import arrayRandomize from '../hooks/arrayRandomize'

const MyProvider = ({ children }) => {
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [highScoreResult, setHighScoreResult] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState();
  const [mode, setMode] = useState("NoTime");
  const [streak, setStreak] = useState(0);
  const [pieImg, setPieImg] = useState(false);
  const [imgPie, setImgPie] = useState()
  const [losePoints, setLosePoints] = useState(false);
  const [diamondPoints, setDiamondPoints] = useState(false);
  const [hintPoints, setHintPoints] = useState(0);
  const [message, setMessage] = useState();
  const [messageB, setMessageB] = useState();
  const [messageC, setMessageC] = useState();
  const [messageD, setMessageD] = useState();
  const [messageStreak, setMessageStreak] = useState();
  const [color, setColor] = useState();
  const [score, setScore] = useState(0);
  const [streakScore, setStreakScore] = useState(0);
  const [diamondsScore, setDiamondsScore] = useState(0);
  const [showStreak, setShowStreak] = useState("");
  const [gameMode, setGameMode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(18);
  const [gameDiff, setGameDiff] = useState();
  const [difficulty, setDifficulty] = useState(["easy", "medium", "hard"]);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState();
  const [randomAnswers, setRandomAnswers] = useState([]);
  const [hints, setHints] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [questionArray, setQuestionArray] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selected, setSelected] = useState();
  const [rightAnswer, setRightAnswer] = useState([]);
  const [indexCounter, setIndexCounter] = useState(0);
  const [indexCounter2, setIndexCounter2] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [answerPopup, setAnswerPopup] = useState(false);
  const [userName, setUserName] = useState("");
  const [messagePie, setMessagePie] = useState("");
  const [messageDiamonds, setMessageDiamonds] = useState("");
  const [storedScore, setStoredScore] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [settings, setSettings] = useState(true);
  const [hello, setHello] = useState("");
  const [helloMsg,setHelloMsg] = useState(false)
  const [circleGeo,setCircleGeo] = useState(false)
  const [circleGeo2,setCircleGeo2] = useState(false)
  const [circleArts,setCircleArts] = useState(false)
  const [circleArts2,setCircleArts2] = useState(false)
  const [circleGen,setCircleGen] = useState(false)
  const [circleGen2,setCircleGen2] = useState(false)
  const [circleFood,setCircleFood] = useState(false)
  const [circleFood2,setCircleFood2] = useState(false)
  const [circleFilm,setCircleFilm] = useState(false)
  const [circleFilm2,setCircleFilm2] = useState(false)
  const [circleSoc,setCircleSoc] = useState(false)
  const [circleSoc2,setCircleSoc2] = useState(false)
  const [circleSci,setCircleSci] = useState(false)
  const [circleSci2,setCircleSci2] = useState(false)
  const [circleSport,setCircleSport] = useState(false)
  const [circleSport2,setCircleSport2] = useState(false)
  const [circleHist,setCircleHist] = useState(false)
  const [circleHist2,setCircleHist2] = useState(false)
  const [circleMus,setCircleMus] = useState(false)
  const [circleMus2,setCircleMus2] = useState(false)



	const [avatarUrl, setAvatarUrl] = useState(
		'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png'
	);
	const [avatarFile, setAvatarFile] = useState();

	const [firstCat, setFirstCat] = useState();

	const [timeUp, setTimeUp] = useState(false);
	const [next, setNext] = useState(false);
	const [timerTrigger, setTimerTrigger] = useState();

	const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
	const initialState = { results: null, loading: true, eror: null };
	const { results, loading, eror } = useFetch(url, initialState);
	const [categories, setCategories] = useState([
		'arts',
		'general',
		'film',
		'food',
		'geography',
		'history',
		'music',
		'science',
		'society',
		'sport',
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

	if (loading) return <p>loading ..</p>;
	if (eror) return <p>'eror'</p>;

  return (
    <MyContext.Provider
      value={{
        circleArts,setCircleArts,
        circleArts2,setCircleArts2,
        circleGeo,setCircleGeo,
        circleGeo2,setCircleGeo2,
        circleFood,setCircleFood,
        circleFood2,setCircleFood2,
        circleGen,setCircleGen,
        circleGen2,setCircleGen2,
        circleFilm,setCircleFilm,
        circleFilm2,setCircleFilm2,
        circleSport,setCircleSport,
        circleSport2,setCircleSport2,
        circleSoc,setCircleSoc,
        circleSoc2,setCircleSoc2,
        circleSci,setCircleSci,
        circleSci2,setCircleSci2,
        circleMus,setCircleMus,
        circleMus2,setCircleMus2,
        circleHist,setCircleHist,
        circleHist2,setCircleHist2,
        hello, setHello,
        helloMsg,
        setHelloMsg,
        settings, setSettings,
        trigger, setTrigger,
        questionCount, 
        setQuestionCount,
        storedScore, 
        setStoredScore,
        messagePie, 
        setMessagePie,
        messageDiamonds, 
        setMessageDiamonds,
        imgPie,
        setImgPie,
        losePoints,
        setLosePoints,
        timerTrigger,
        setTimerTrigger,
        showStreak,
        setShowStreak,
        next,
        setNext,
        mode,
        setMode,
        timeUp,
        setTimeUp,
        highScoreResult,
        setHighScoreResult,
        highScore,
        setHighScore,
        streakScore,
        setStreakScore,
        categories,
        setCategories,
        gameDiff,
        setGameDiff,
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
        diamondPoints,
        setDiamondPoints,
        diamondsScore,
        setDiamondsScore,
        hintPoints, 
        setHintPoints,
        pie,
        setPie,
        pieImg,
        setPieImg,
        clicked,
        setClicked,
        username,
        setUsername,
        streak,
        setStreak,
        img,
        setImg,
        selected,
        setSelected,
        firstCat,
        setFirstCat,
        error,
        setError,
        questionArray,
        setQuestionArray,
        indexCounter,
        setIndexCounter,
        indexCounter2,
        setIndexCounter2,
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
        messageC,
        setMessageC,
        messageD,
        setMessageD,
        messageStreak,
        setMessageStreak,
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
        setAnswerPopup
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
