import React from 'react';
import { useEffect, useContext } from 'react';
import MyContext from '../../../context/MyContext';
import right from '../../../assets/images/right.png';
import wrong from '../../../assets/images/wrong.png';

const Correct = () => {
	const context = useContext(MyContext);
	const {
		storedScore,
		score,
		selected,
		indexCounter,
		rightAnswer,
		img,
		setImg,
		diff,
		setMessage,
		setMessageD,
		timeUp,
		streak,
		next,
		setMessageStreak,
		messageStreak,
		gameOver,
	} = context;

	useEffect(() => {
		gameOver === false && selected === rightAnswer[indexCounter]
			? setTimeout(() => {
					setImg(<img src={right} alt='' />);
			  }, 800)
			: setImg(null);
	}, [selected, gameOver]);

	useEffect(() => {
		gameOver === false && selected && selected !== rightAnswer[indexCounter]
			? setTimeout(() => {
					timeUp === false &&
						setImg(<img className='img2' src={wrong} alt='' />);
			  }, 1200)
			: setImg(null);
	}, [selected]);

	useEffect(() => {
		streak === 3 &&
			img &&
			next &&
			setMessageStreak('3 CORRECT IN A ROW + 20 POINtS + 1 hint !!!');
		streak === 4 &&
			img &&
			next &&
			setMessageStreak('4 CORRECT IN A ROW + 30 POINtS + 1 hint !!!');
		streak === 5 &&
			img &&
			next &&
			setMessageStreak('5 CORRECT IN A ROW + 50 POINtS + 1 hint !!!');
		streak === 6 &&
			img &&
			next &&
			setMessageStreak('6 CORRECT IN A ROW + 100 POINtS + 1 hint !!!');
		!img && setMessageStreak('');
	}, [setMessageStreak, next, messageStreak]);

	switch (diff) {
		case 'easy':
			setMessage('+10 points !!!');
			break;
		case 'medium':
			setMessage('+15 points !!!');
			break;
		case 'hard':
			setMessage('+20 points !!!');
			break;
		default:
			setMessage(null);
	}

	(score === 3 || score === 6) && setMessageD();

	switch (diff) {
		case 'easy':
			score !== 0 && score !== 6 && score !== 3 && setMessageD('-7 points !!!');
			break;
		case 'medium':
			score !== 5 && setMessageD('-5 points !!!');
			break;
		case 'hard':
			score !== 5 && setMessageD('-5 points !!!');
			break;
		default:
			setMessageD(null);
	}

	(storedScore === 3 || storedScore === 6) &&
		diff === 'easy' &&
		setMessageD("U've lost All your Points");
	storedScore === 0 && diff === 'easy' && setMessageD('U get n0 Points !!');
	score === 0 && diff === 'easy' && setMessageD('U get n0 Points !!');
	storedScore <= 5 &&
		(diff === 'hard' || diff === 'medium') &&
		setMessageD("U've lost All your Points !!");
	storedScore === 0 &&
		(diff === 'hard' || diff === 'medium') &&
		setMessageD('U get n0 Points !!');

	return <div>{img}</div>;
};

export default Correct;
