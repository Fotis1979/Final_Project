import { useEffect, useContext } from 'react';
import { useState } from 'react';
import MyContext from '../../../context/MyContext';

const Timer = () => {
	const context = useContext(MyContext);
	const {
		setQuestions,

		setMessage,

		setScore,

		setGameOver,
	} = context;
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [hoursO, setHoursO] = useState(0);
	const [minutesO, setMinutesO] = useState(0);
	const [secondsO, setSecondsO] = useState(0);

	// gameOver && setQuestions("")

	useEffect(() => {
		function incrementSeconds() {
			setSeconds((prev) => prev + 1);
		}
		setInterval(incrementSeconds, 1000);
	}, []);

	useEffect(() => {
		function incrementMinutes() {
			setMinutes((prev) => prev + 1);
		}
		setInterval(incrementMinutes, 60000);

		minutes === 5 && setMinutes(0);
	}, []);
	useEffect(() => {
		seconds === 10 && setSecondsO('');
		seconds === 60 && setSeconds(0);
		seconds === 0 && setSecondsO(0);
		minutes === 3 && setQuestions('');
		minutes === 3 && setGameOver(true);
		seconds === 0 && setGameOver(false);
		// gameOver && setQuestions("")
		//minutes === 3 && setScore(0);
		minutes === 3 && setMessage('');

		// console.log(gameOver);
	}, [seconds]);
	return (
		<div>
			<div className='timer'>
				<span>Game Ends in 3* mins </span>
				{hoursO}
				{hours}:{minutesO}
				{minutes}:{secondsO}
				{seconds}
			</div>
		</div>
	);
};

export default Timer;
