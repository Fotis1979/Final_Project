import h1icon from '../../assets/images/h1 icon.png';
import Nav from './Nav';
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";

const Home = () => {
	const context = useContext(MyContext);
	const {
		setIndexCounter,
		IndexCounter,
		setGameOver,
		gameOver,
	} = context;

	useEffect(() => {
		setGameOver(false)
		setIndexCounter(0)
	}, [IndexCounter, setGameOver,gameOver,setIndexCounter])

	return (
		<div className='page--home'>
			<Nav />
			<div className='page--section'>
				<img className='trivia--banner' src={`${h1icon}`} alt='banner' />
			</div>
		</div>
	);
};

export default Home;
