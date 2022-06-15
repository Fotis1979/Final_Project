import { useEffect, useContext } from 'react';
import MyContext from '../../../context/MyContext';

const ScoreCounter = () => {
	const context = useContext(MyContext);
	const {
		rightAnswer,
		score,
		setScore,
		selected,
		indexCounter,
		setHints,
		streak,
		setStreak,
		timeUp,
		messageStreak,
		setMessageStreak,
		img,
		next,
		losePoints,
		setLosePoints,
	} = context;

	useEffect(() => {
		selected !== rightAnswer[indexCounter] && setLosePoints(true);
		selected === rightAnswer[indexCounter] && setLosePoints(false);
	}, [selected, setLosePoints, indexCounter, rightAnswer]);

	useEffect(() => {
		for (let x = 1; x <= 10; x++)
			for (let y = 1; y <= 15; y++)
				score !== 0 &&
					(score === 100 * x + y && score % (100 * x + y)) === 0 &&
					img &&
					next &&
					setTimeout(() => {
						losePoints === false && streak < 3 && setHints((prev) => prev + 1);
					}, 2000);

		timeUp && setStreak(0);
		indexCounter === 12 && setStreak(0);
		indexCounter === 12 && selected && setStreak(1);
		indexCounter === 6 && setStreak(0);
		indexCounter === 6 && selected && setStreak(1);
	}, [img, selected, timeUp, setHints, losePoints]);

	useEffect(() => {
		(streak === 3 || streak === 4 || streak === 5 || streak === 6) &&
			score !== 50 &&
			img &&
			setTimeout(() => {
				losePoints === false && setHints((prev) => prev + 1);
			}, 2000);
	}, [streak, next, losePoints]);

	useEffect(() => {
		selected === rightAnswer[indexCounter] && setStreak((prev) => prev + 1);
		// console.log("streak is : ", streak);
	}, [selected]);

	useEffect(() => {
		switch (streak) {
			case 3:
				messageStreak &&
					setTimeout(() => {
						setScore(score + 20);
					}, 1500);
				break;
			case 4:
				messageStreak &&
					setTimeout(() => {
						setScore(score + 30);
					}, 1500);
				break;
			case 5:
				messageStreak &&
					setTimeout(() => {
						setScore(score + 50);
					}, 1500);
				break;
			case 6:
				messageStreak &&
					setTimeout(() => {
						setScore(score + 100);
					}, 1500);
				break;
			default:
				return;
		}
		!img && setMessageStreak();
	}, [messageStreak]);

	return (
		<div className='rewards--btn'>
			<span>SCORE : {score}</span>
		</div>
	);
};

export default ScoreCounter;
