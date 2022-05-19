import { useEffect, useContext, useState } from 'react';
import MyContext from '../../../context/MyContext';
import '../../../styling/rewards.css';

const Counter = () => {
	const context = useContext(MyContext);
	const {

		rightAnswer,
		score,
		hints,
		setScore,
		selected,
		indexCounter,
		setHints,
		streak,
		setStreak
	} = context;


	useEffect(() => {

		for (let i = 50; i <= 55; i++)
			score !== 0 && (score % i === 0 ) && setHints((prev) => prev + 1)

	}, [score, setHints]);


	useEffect(() => {
		selected === rightAnswer[indexCounter] && setStreak(streak + 1)
		console.log("streak is : ", streak);
		streak === 3
			&& setScore(score + 20)
		streak >= 3 && setStreak(0)
	}, [selected, indexCounter, rightAnswer, setStreak])


	return (
		<div className='Counter'>

		<label>SCORE : </label>
		{score}
			

			
		</div>
	);
};

export default Counter;
