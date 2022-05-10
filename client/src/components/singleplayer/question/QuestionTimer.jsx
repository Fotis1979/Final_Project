import { useEffect } from 'react';
import { useState, useContext } from 'react';
import MyContext from '../../../context/MyContext';

const QuestionTimer = () => {
	const context = useContext(MyContext);
	const {
		setQuestions,
		message,
		setMessage,
		diff,
		cat,
		setIndexCounter,
		indexCounter,
		setColor,
		setRightAnswer,
		questions,
		newQuestion,
		setNewQuestion,
	} = context;

	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		function incrementSeconds() {
			setSeconds((prev) => prev + 1);
		}
		setInterval(incrementSeconds, 1000);
	}, []);

	useEffect(() => {
		seconds === 16 && setNewQuestion(true);
		seconds === 16 && setSeconds(0);

		seconds <= 15 && setNewQuestion(false);
		message && setSeconds(0);
	}, [seconds]);

	useEffect(() => {
		newQuestion &&
			fetch(
				`https://the-trivia-api.com/api/questions?limit=50&difficulty=${diff}&&categories=${cat}`
			)
				.then((res) => res.json())
				.then((data) => setQuestions(data[Math.floor(Math.random() * 50)]));

		setRightAnswer('');
	}, [newQuestion]);

	return (
		<div className='question-timer'>
			<span className='sec'>{seconds}</span>

			<span style={{ fontSize: '20px', paddingTop: '20px' }}>
				U have 15 secs for each Question !
			</span>
		</div>
	);
};

export default QuestionTimer;
