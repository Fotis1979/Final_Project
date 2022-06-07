import ScoreCounter from '../question/ScoreCounter';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import Hints from './Hints';
import '../../../styling/questions.scss';
import HighScore from './HighScore';

const Rewards = () => {
	const context = useContext(MyContext);
	const {
		hints,
		setHints,
		score,
		highScore,
		setHighScore,
		name,
		setName,
		isProfileSaved,
		setIsProfileSaved,
		setLoginMsg,
	} = context;

	return (
		<div className='rewards--section'>
			<ScoreCounter />
			<Hints />
			<HighScore />
		</div>
	);
};

export default Rewards;
