import x from '../../../src/assets/images/x.png';
import Nav from './Nav';

const GameOver = () => {
	return (
		<>
			<Nav />
			<div className='gameOver'>
				<img className='gameOver--img' src={x} alt='Game_Over' />
			</div>
		</>
	);
};

export default GameOver;
