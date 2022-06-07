import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import MyContext from '../../../context/MyContext';

import Nav from '../../pages/Nav';
import QuestionTimer from './QuestionTimer';
import Rewards from '../rewards/Rewards';
import Correct from '../rewards/Correct';
import Diamonds from '../rewards/Diamonds';

import '../../../styling/questions.scss';

const QuestionBody = () => {
	const context = useContext(MyContext);
	const {
		diamondPoints,
		clicked,
		next,
		setNext,
		timerTrigger,
		setTimerTrigger,
		categories,
		setStoredScore,
		loading,
		number,
		eror,
		streak,
		hints,
		setHints,
		diff,
		setStreak,
		setDiff,
		seconds,
		setSeconds,
		wrongAnswers,
		rightAnswer,
		questionArray,
		cat,
		setCat,
		score,
		setScore,
		indexCounter,
		setIndexCounter,
		selected,
		setSelected,
		img,
		img2,
		gameOver,
		gameDiff,
		setError,
		setTimeUp,
		timeUp,
		messageStreak,
		messageD,
		message,
		showStreak,
		setShowStreak,
		setClicked,
		storedScore,
		pie,
		setGameOver,
	} = context;

	useEffect(() => {
		selected && setTimerTrigger(false);
	}, [selected, setTimerTrigger, seconds]);

	useEffect(() => {
		!selected &&
			setTimeout(() => {
				setTimerTrigger(true);
			}, 4500);
	}, [selected]);

	useEffect(() => {
		setTimeout(() => {
			timerTrigger === true && setSeconds((prev) => prev + 1);
		}, 1000);
	}, [timerTrigger, seconds]);

	useEffect(() => {
		console.log(categories);
		indexCounter >= 0 && indexCounter <= 5 && setCat(categories[indexCounter]);
		indexCounter >= 6 &&
			indexCounter <= 11 &&
			setCat(categories[indexCounter - 6]);
		indexCounter >= 12 &&
			indexCounter <= 18 &&
			setCat(categories[indexCounter - 12]);
	}, [indexCounter, categories]);

	const nav = useNavigate();

	if (indexCounter === number - 1 + 1) {
		// console.log("last QUESTion");
		// (pie === true && gameOver === true) ? setTimeout(() => {
		//   setStoredScore(storedScore + 199)
		// }, 3000) :
		setStoredScore(score);
		nav('/game_over');
	}

	const handleSelect = (i) => {
		setSeconds(0);

		if (selected === i && selected === rightAnswer[indexCounter])
			return 'select';
		else if (selected === i && selected !== rightAnswer[indexCounter])
			return 'wrong';
		else if (i === rightAnswer[indexCounter]) return 'select';
	};

	useEffect(() => {
		console.log('CLICKED IS :', clicked);
	}, [clicked]);

	useEffect(() => {
		img && score === 0 && setNext(true);
	}, [img, setNext, setTimerTrigger, score]);

	useEffect(() => {
		console.log(rightAnswer[indexCounter]);
	}, [rightAnswer, indexCounter]);

	useEffect(() => {
		(selected === wrongAnswers[indexCounter][0] ||
			selected === wrongAnswers[indexCounter][1] ||
			selected === wrongAnswers[indexCounter][2]) &&
			setStreak(0);
	}, [selected]);

	const handleCheck = (i) => {
		setSelected(i);

		if (i === rightAnswer[indexCounter] && diff === 'easy') {
			setTimeout(() => {
				setScore(score + 10);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (i === rightAnswer[indexCounter] && diff === 'medium') {
			setTimeout(() => {
				setScore(score + 15);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (i === rightAnswer[indexCounter] && diff === 'hard') {
			setTimeout(() => {
				setScore(score + 20);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (
			i !== rightAnswer[indexCounter] &&
			diff === 'hard' &&
			score !== 0 &&
			score >= 5
		) {
			setTimeout(() => {
				setScore(score - 5);
			}, 2800) &&
				setTimeout(() => {
					score < 5 && setScore(0);
				}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (
			i !== rightAnswer[indexCounter] &&
			(diff === 'hard' || diff === 'medium') &&
			score <= 4
		) {
			setTimeout(() => {
				setScore(0);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (
			i !== rightAnswer[indexCounter] &&
			diff === 'medium' &&
			score !== 0 &&
			score >= 5
		) {
			setTimeout(() => {
				setScore(score - 5);
			}, 2800) &&
				score < 5 &&
				setTimeout(() => {
					setScore(0);
				}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (
			i !== rightAnswer[indexCounter] &&
			diff === 'easy' &&
			score !== 0 &&
			score >= 7
		) {
			setTimeout(() => {
				setScore(score - 7);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
		if (
			i !== rightAnswer[indexCounter] &&
			diff === 'easy' &&
			score !== 0 &&
			score < 7
		) {
			setTimeout(() => {
				setScore(0);
			}, 2800);
			setTimeout(() => {
				setNext(true);
			}, 4000);

			setNext(false);
			setError(false);
		}
	};

	useEffect(() => {
		((gameDiff === 'easy' && seconds > 20) ||
			(gameDiff === 'medium' && seconds > 15) ||
			(gameDiff === 'hard' && seconds > 12)) &&
			setTimeUp(true);
		timeUp === true && setNext(true);
	}, [gameDiff, seconds, setTimeUp, timeUp, setNext]);

	const nextHandler = () => {
		setClicked(false);
		if (selected) {
			setSelected();
			setStoredScore(score);
		} else setError('Please select an option first');
		setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
		setSeconds(0);
		setTimeUp(false);
	};

	// useEffect(() => {

	//   console.log("TiMERTriGGeR : ", timerTrigger);
	// }, [timerTrigger])

	// useEffect(() => {

	//   console.log("GAMEOVER IS : ", gameOver);
	// }, [gameOver, indexCounter])

	const answers = [];
	answers.push(rightAnswer[indexCounter]);
	wrongAnswers[indexCounter].map((el) => answers.push(el));

	indexCounter === 6 && setDiff('medium');
	indexCounter === 12 && setDiff('hard');

	const pop = (e) => {
		setClicked(true);
		e.pop();
		setHints((prev) => prev - 1);
	};
	useEffect(() => {
		console.log('CLICKED IS : ', clicked);
	}, [clicked]);

	useEffect(() => {
		console.log('INDEXCOUNTER IS : ', indexCounter);
	}, [indexCounter]);

	if (loading) return <p>loading ..</p>;
	if (eror) return <p>{eror}</p>;

	return (
		<>
			<Nav />

			<div className='qa--section'>
				{indexCounter < 6 && <p className='round'>1st Round !</p>}
				{indexCounter >= 6 && indexCounter <= 11 && (
					<p className='round'>2nd Round !</p>
				)}
				{indexCounter >= 12 && <p className='round'>Diamond Round !</p>}
				{!img && !timeUp && <p className='mode'>{diff}</p>}
				{indexCounter >= 12 && (
					<p style={{ color: 'red', fontSize: '25px', marginLeft: '20px' }}>
						Diamonds: {diamondPoints}
					</p>
				)}
				<div className='round--info'>
					{!img && !timeUp && <p className='cat'>Category : {cat}</p>}
					{!img ? setShowStreak(`STREAK is : ${streak}`) : setShowStreak()}
					{!img && <p className='cat'> {showStreak}</p>}
				</div>
				{next === true && img && streak !== 0 && streak >= 2 && (
					<p className='cat3'>{messageStreak}</p>
				)}
				{!messageStreak && !showStreak && (
					<p className='cat2'>
						{selected !== rightAnswer[indexCounter] ? messageD : message}
					</p>
				)}
				<Rewards />
				<div>
					{timeUp === true && <p className='cat'>TIME UP !!! CLICK NEXT</p>}
					{/*<header className='App-header'>*/}

					{!img && !timeUp && (
						<div className='questions--section'>
							Q{indexCounter + 1} .{' '}
							<p className='quest'>{questionArray[indexCounter]}</p>
						</div>
					)}
					{/* ********** Remove style to show everything !! ********** */}
					<div
						//  style={img && { visibility: "hidden" }}
						className='answers--section'
					>
						{answers.sort().map((el, index) => (
							<div key={index} className='answers--answerdiv'>
								<button
									value={el}
									className={
										clicked === true
											? `singleOpt  ${selected && handleSelect(el)}`
											: `singleOption  ${selected && handleSelect(el)}`
									}
									key={el}
									onClick={() => handleCheck(el)}
									disabled={selected}
									// ********** Remove style to show everything !! **********
									style={img && { visibility: 'hidden' }}
								>
									{index + 1 + '.' + el}
								</button>
							</div>
						))}
						{(img || timeUp || img2) &&
							next === true &&
							(messageStreak || (message && streak < 3)) && (
								<button className='next--btn' onClick={nextHandler}>
									NEXT
								</button>
							)}
						{
							<div className='popUp'>
								{' '}
								<Correct />
							</div>
						}
					</div>
					{!selected &&
						(hints === 1 || hints >= 2) &&
						wrongAnswers[indexCounter].length >= 2 && (
							<button
								className='rewards--btn hints--btn'
								onClick={() => pop(wrongAnswers[indexCounter])}
							>
								{hints >= 2
									? 'DoubleClick for 50/50-Chance'
									: hints === 1 && 'Click for one Hint'}
							</button>
						)}
					<Diamonds />
					{timeUp === false &&
						!selected &&
						((gameDiff === 'easy' && seconds < 21) ||
							(gameDiff === 'medium' && seconds < 16) ||
							(gameDiff === 'hard' && seconds < 13)) && <QuestionTimer />}
					{timeUp === true && setSelected(wrongAnswers[0])}
					{/*</header>*/}
				</div>
			</div>
		</>
	);
};

export default QuestionBody;
