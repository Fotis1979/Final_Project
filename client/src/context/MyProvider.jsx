import React from 'react';
import MyContext from './MyContext';
import { useState } from 'react';
import '../../src/App.css';

const MyProvider = ({ children }) => {
	const [questions, setQuestions] = useState();
	const [message, setMessage] = useState();
	const [color, setColor] = useState();
	const [rightAnswer, setRightAnswer] = useState();
	const [score, setScore] = useState(0);
	const [newQuestion, setNewQuestion] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [g, setG] = useState(false);

	return (
		<MyContext.Provider
			value={{
				questions,
				setQuestions,
				message,
				setMessage,
				color,
				setColor,
				rightAnswer,
				setRightAnswer,
				score,
				setScore,
				newQuestion,
				setNewQuestion,
				gameOver,
				setGameOver,
				g,
				setG,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
