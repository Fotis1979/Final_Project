import { useContext, useState, useEffect } from 'react';
import MyContext from '../../../context/MyContext';

import arrayRandomize from '../../../hooks/arrayRandomize';

import Counter from './Counter';
import Timer from './Timer';
import QuestionCounter from './QuestionCounter';
import QuestionTimer from './QuestionTimer';
import Rewards from '../rewards/Rewards';

import '../../../styling/questions.css';

const QuestionBody = () => {
	const context = useContext(MyContext);
	const {
		loading,
		eror,
		results,
		allAnswers,
		questions,
		lock,
		setLock,
		randomAnswers,
		setRandomAnswers,
		score,
		setScore,
	} = context;
	const [error, setError] = useState(false);
	const [selected, setSelected] = useState();
	const [indexCounter, setIndexCounter] = useState(0);

	const questionArray = results.map((item) => item.question);
	const wrongAnswers = results.map((item) => item.incorrectAnswers);
	const rightAnswer = results.map((item) => item.correctAnswer);

	// console.log(questionArray);
	// console.log(wrongAnswers);
	// console.log(rightAnswer);

	const handleSelect = (i) => {
		if (selected === i && selected === rightAnswer[indexCounter])
			return 'select';
		else if (selected === i && selected !== rightAnswer[indexCounter])
			return 'wrong';
		else if (i === rightAnswer[indexCounter]) return 'select';
	};
	const handleCheck = (i) => {
		setSelected(i);
		if (i === rightAnswer[indexCounter]) setScore(score + 10);
		setError(false);
	};

	const nextHandler = () => {
		// console.log("first");
		if (selected) {
			setSelected();
		} else setError('Please select an option first');

		setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
	};
	console.log(rightAnswer[indexCounter]);
	// console.log(indexCounter);

	const answers = [];
	answers.push(rightAnswer[indexCounter]);
	wrongAnswers[indexCounter].map((el) => answers.push(el));

	useEffect(() => {
		setRandomAnswers(arrayRandomize(answers));
	}, [indexCounter]);

	//   useEffect(() => {

	//     answers.sort(() => 0.5 - Math.random())
	// },[indexCounter])

	console.log(answers);
	console.log('answers are :', answers);
	console.log(randomAnswers);
	console.log(rightAnswer);

	console.log(results[indexCounter].correctAnswer);

	// const testHandler = (e) => {
	//   console.log(e.target.value);
	//   if (e.target.value === rightAnswer[indexCounter]) {
	//     console.log("correct");
	//     setColor("green");
	//     // e.target.style.backgroundColor = "green";
	//   } else {
	//     // e.target.style.backgroundColor = "red";
	//     setColor("red");

	//     console.log("wrong");
	//   }
	// };
	console.log(results[indexCounter].category);

	// const LockButtons = () => {
	//   color ? setLock(true) : setLock(false);
	// };
	// useEffect(() => {
	//   LockButtons();
	// }, [color]);

	if (loading) return <p>loading ..</p>;
	if (eror) return <p>{eror}</p>;

	return (
		<main>
			<Rewards />
			<div className='qa--section'>
				<div className='questions--section'>
					Q{indexCounter + 1} . {questionArray[indexCounter]}
				</div>
				<div className='answers--section'>
					{randomAnswers.map((el, index) => (
						<div className='align-items'>
							<button
								name={el}
								value={el}
								className={`singleOption  ${selected && handleSelect(el)}`}
								key={el}
								onClick={() => handleCheck(el)}
								disabled={selected}
								//onClick={(e) => testHandler(e)}
								// className="answers-btn"
								//  style={{ backgroundColor: `${color}` }}
							>
								{index + 1 + '.' + el}
							</button>
							{/* <button
                  value={el}
                  onClick={lock === false ? (e) => testHandler(e) : undefined}
                  className="answers-btn"
                  style={{ backgroundColor: `${color}` }}
                ></button> */}
						</div>
					))}
				</div>

				<button onClick={nextHandler}>next</button>
			</div>
			<QuestionCounter />
			{/* <QuestionTimer /> */}
			{/* <Timer /> */}

			<Counter />

			{/* { questions && <p>{questions}</p> } */}
		</main>
	);
};

export default QuestionBody;
