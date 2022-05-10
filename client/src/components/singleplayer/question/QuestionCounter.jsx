import { useState, useEffect, useContext } from 'react';
import MyContext from '../../../context/MyContext';

const QuestionCounter = () => {
	const context = useContext(MyContext);
	const {
		color,

		newQuestion,
	} = context;
	const [qCount, setQCount] = useState(0);
	useEffect(() => {
		newQuestion && setQCount((prev) => prev + 1);
		color && setQCount((prev) => prev + 1);
	}, [newQuestion, color]);

	return (
		<div>
			<p className='qCounter'>Question Count {qCount}</p>
		</div>
	);
};

export default QuestionCounter;
