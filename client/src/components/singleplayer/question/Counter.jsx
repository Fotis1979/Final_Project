import { useEffect, useContext } from 'react';
import MyContext from '../../../context/MyContext';
import '../../../styling/rewards.css';

const Counter = () => {
	const context = useContext(MyContext);
	const {
		color,

		score,
		setScore,
		newQuestion,
		hints,
		setHints,
	} = context;
	// console.log("hints", hints);
	// useEffect(() => {
	//   color === "green" && newQuestion === false && setScore((prev) => prev + 10);
	// }, [color]);
	useEffect(() => {
		score !== 0 && score % 50 === 0 && setHints((prev) => prev + 1);
	}, [score]);
	return (
		<div className='Counter'>
			<label>SCORE : </label>
			<span>{score}</span>
		</div>
	);
};

export default Counter;
