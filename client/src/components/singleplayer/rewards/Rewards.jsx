import Counter from '../question/Counter';
import Hints from './Hints';
import '../../../styling/questions.css';

const Rewards = () => {
	return (
		<div className='rewards--section'>
			<Counter />
			<Hints />
		</div>
	);
};

export default Rewards;
