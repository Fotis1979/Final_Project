// import { useContext, useEffect } from 'react';
// import MyContext from '../../../context/MyContext';

// import x from '../../../assets/images/x.png';
// import q from '../../../assets/images/q.jpg';
// const Answers = () => {
// 	const context = useContext(MyContext);
// 	const {
// 		questions,
// 		setQuestions,
// 		message,
// 		setMessage,
// 		color,
// 		setColor,
// 		rightAnswer,
// 		setRightAnswer,

// 		gameOver,

// 		g,
// 		setG,
// 	} = context;

// 	const AnswerSubmit = (e) => {
// 		e.preventDefault();

// 		// *** SET TIMEOUT to wait four seconds until the next fetch. ***

// 		setTimeout(NewQ, 4000);

// 		//  *** FUNCTION to fetch fifty api question objects and choose one of them randomly. ***

// 		function NewQ() {
// 			// console.log("fetched");
// 			!color &&
// 				fetch(
// 					'https://the-trivia-api.com/api/questions?limit=50&difficulty=hard'
// 				)
// 					.then((res) => res.json())
// 					.then((data) => setQuestions(data[Math.floor(Math.random()) * 50]));

// 			setMessage('');
// 			setColor('');
// 			setRightAnswer('');
// 		}

// 		if (e.target.value === questions.correctAnswer) {
// 			setMessage('RIGHT ANSWER !!!');
// 			setRightAnswer('');
// 			setColor('green');
// 		} else {
// 			setMessage('WRONG ANSWER !!!');
// 			setColor('tomato');
// 			e.target.value !== questions.correctAnswer &&
// 				setRightAnswer(questions.correctAnswer);
// 		}
// 	};

// 	const LockButtons = () => {
// 		color ? setG(true) : setG(false);
// 	};
// 	useEffect(() => {
// 		LockButtons();
// 	}, [color]);

// 	// *** FUNCTION to shuffle the items of the array in a random order. ***
// 	function RandomArrayShuffle(array) {
// 		var currentIndex = questions.incorrectAnswers.length,
// 			temporaryValue,
// 			randomIndex;

// 		while (0 !== currentIndex) {
// 			randomIndex = Math.floor(Math.random() * currentIndex);
// 			currentIndex -= 1;
// 			temporaryValue = questions.incorrectAnswers[currentIndex];
// 			questions.incorrectAnswers[currentIndex] =
// 				questions.incorrectAnswers[randomIndex];
// 			questions.incorrectAnswers[randomIndex] = temporaryValue;
// 		}
// 		return array;
// 	}
//   questions && console.log(questions.difficulty);

// 	// *** CONSOLE.LOGS for testing ***
// 	// questions && console.log(questions.incorrectAnswers.indexOf(questions.correctAnswer));
// 	// questions && console.log(questions.incorrectAnswers);
// 	// ***************

// 	// *** PUSH the Correct answer to the incorrect answers array and shuffle the array running the shuffleArray function in the end. ***

// 	questions &&
// 		questions.incorrectAnswers.length === 3 &&
// 		questions.incorrectAnswers.push(questions.correctAnswer) &&
// 		RandomArrayShuffle();
// 	return (
// 		<div>
// 			<div className='canvas'>
// 				{questions && !gameOver && <h1>Questions Quiz</h1>}
// 				<br />
// 				<br />
// 				{questions && <h2> CATEGORY:{' ' + questions.category}</h2>}
// 				<br />
// 				<br />
// 				{questions && <div className='question'> {questions.question}</div>}
// 				<br /> <br />
// 				{
// 					<aside className='questions-section'>
// 						{questions && (
// 							<button
// 								style={{ backgroundColor: `${color}` }}
// 								id={questions.id}
// 								value={questions.incorrectAnswers[0]}
// 								onClick={g === false ? (e) => AnswerSubmit(e) : undefined}
// 							>
// 								{questions.incorrectAnswers[0]}
// 							</button>
// 						)}

// 						{questions && (
// 							<button
// 								style={{ backgroundColor: `${color}` }}
// 								id={questions.id}
// 								value={questions.incorrectAnswers[1]}
// 								onClick={g === false ? (e) => AnswerSubmit(e) : undefined}
// 							>
// 								{' '}
// 								{questions.incorrectAnswers[1]}
// 							</button>
// 						)}

// 						{questions && (
// 							<button
// 								style={{ backgroundColor: `${color}` }}
// 								id={questions.id}
// 								value={questions.incorrectAnswers[2]}
// 								onClick={g === false ? (e) => AnswerSubmit(e) : undefined}
// 							>
// 								{' '}
// 								{questions.incorrectAnswers[2]}
// 							</button>
// 						)}

// 						{questions && (
// 							<button
// 								style={{ backgroundColor: `${color}` }}
// 								id={questions.id}
// 								value={questions.incorrectAnswers[3]}
// 								onClick={g === false ? (e) => AnswerSubmit(e) : undefined}
// 							>
// 								{' '}
// 								{questions.incorrectAnswers[3]}
// 							</button>
// 						)}

// 						{!questions && (
// 							<button onClick={(e) => AnswerSubmit(e)}>
// 								{gameOver === false ? 'START QUIZ' : 'Next Game'}
// 							</button>
// 						)}

// 						<br />
// 						<br />

// 						{message && !gameOver && (
// 							<div className='w'>
// 								<p style={{ color: `${color}` }}>{message} </p>
// 							</div>
// 						)}

// 						{rightAnswer && (
// 							<p className='answer-display'>
// 								{rightAnswer !== '' &&
// 									questions &&
// 									'Right Answer : ' + rightAnswer}
// 							</p>
// 						)}
// 					</aside>
// 				}
// 				{gameOver && <img src={`${x}`} alt='img' />}
// 				{!questions && !gameOver && (
// 					<img className='start' src={`${q}`} alt='img' />
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Answers;
