import '../../../styling/questions.css';
import { useContext, useState } from 'react';

import Counter from '../question/Counter';
import Hints from './Hints';
import HighScore from './HighScore';
//import QuestionCounter from '../question/QuestionCounter';

const Rewards = () => {
	return (
		<div className='rewards--section'>
			<Counter />
			<Hints />
			<HighScore />
			{/*<QuestionCounter />*/}
		</div>
	);
};

export default Rewards;
