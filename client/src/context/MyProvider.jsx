import { useEffect } from 'react';
import MyContext from './MyContext';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import '../../src/App.css';

const MyProvider = ({ children }) => {
	const [message, setMessage] = useState();
	const [color, setColor] = useState();
	const [score, setScore] = useState(0);
	const [category, setCategory] = useState();
	const [difficulty, setDifficulty] = useState();
	const [gameMode, setGameMode] = useState();
	const [seconds, setSeconds] = useState(0);

	const [error, setError] = useState(false);
	const [number, setNumber] = useState(10);
	const [allAnswers, setAllAnswers] = useState();
	const [correctAnswer, setCorrectAnswer] = useState();
	const [incorrect, setIncorrect] = useState();
	const [quest, setQuest] = useState([]);

	const [diff, setDiff] = useState('easy');
	const [cat, setCat] = useState('arts');
	const [randomAnswers, setRandomAnswers] = useState([]);
	const [hints, setHints] = useState(0);
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const [questionArray, setQuestionArray] = useState([]);
	const [wrongAnswers, setWrongAnswers] = useState([]);
	const [rightAnswer, setRightAnswer] = useState([]);

	const [answers, setAnswers] = useState([]);

	const [indexCounter, setIndexCounter] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [answerPopup, setAnswerPopup] = useState(false);

	const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
	const initialState = { results: null, loading: true, eror: null };
	const { results, loading, eror } = useFetch(url, initialState);
	// const questionArray = results.map((item) => item.question); //set state to everything
	//results.map((item) => setQuestionArray(item.question));
	useEffect(() => {
		if (results !== null) {
			setQuestionArray(results.map((item) => item.question));
			setWrongAnswers(results.map((item) => item.incorrectAnswers));
			setRightAnswer(results.map((item) => item.correctAnswer));
		}
	}, [results]);

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
				answers,
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
				email,
				setEmail,
				pass,
				setPass,
				answerPopup,
				setAnswerPopup
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
