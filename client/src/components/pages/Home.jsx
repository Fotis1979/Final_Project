import h1icon from '../../assets/images/h1 icon.png';
import Nav from './Nav';

const Home = () => {

	return (
		<div className='page--home'>
			<Nav />
			<div className='home--section'>
				<img className='trivia--banner' src={`${h1icon}`} alt='banner' />
			</div>
		</div>
	);
};

export default Home;
