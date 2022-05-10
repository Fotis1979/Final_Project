import '../../../styling/rewards.css';
import Counter from '../question/Counter';
import Hints from './Hints';

const Rewards = () => {
	return (
		<div className='rewards--section'>
			<Counter />
			<Hints />
		</div>
	);
};

export default Rewards;
