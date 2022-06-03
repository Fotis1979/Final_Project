import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import Nav from './Nav';
import arrayRandomize from '../../hooks/arrayRandomize';
import '../../../src/styling/settings.scss';

const Settings = () => {
	const navigate = useNavigate();

	const context = useContext(MyContext);
	const {
		loading,
		setCategories,
		gameOver,
		eror,
		setGameDiff,
		categories,
		mode,
		setMode,
	} = context;

	const gameDifficulty = (e) => {
		setGameDiff(e.target.value);
	};

	useEffect(() => {
		gameOver === false && setCategories(arrayRandomize(categories).slice(4));
		console.log(categories);
	}, []);

	const gameMode = (e) => {
		setMode(e.target.value);
	};

	const checkHandler = () => {
		if (mode === 'NoTime') {
			navigate('/questions');
		} else if (mode === 'Time') {
			navigate('/timeMode');
		}
	};

	if (loading) return <p>loading ..</p>;
	if (eror) return <p>{eror}</p>;

	return (
		<>
			<Nav />
			<div className='qa--section'>
				<div className='settings'>
					<h1>Choose Your Difficulty:</h1>
					<button
						className='settings--btn'
						onClick={(e) => gameDifficulty(e)}
						value={'easy'}
					>
						{' '}
						BEGINNER{''}
					</button>
					<button
						className='settings--btn'
						onClick={(e) => gameDifficulty(e)}
						value={'medium'}
					>
						{' '}
						EXPERT{' '}
					</button>
					<button
						className='settings--btn'
						onClick={(e) => gameDifficulty(e)}
						value={'hard'}
					>
						{' '}
						PROFESSOR{' '}
					</button>

					<label>Game Mode</label>
					<select className='settings--mode' onChange={(e) => gameMode(e)}>
						<option onChange={(e) => gameMode(e)} value='NoTime'>
							NoTime
						</option>
						<option onChange={(e) => gameMode(e)} value='Time'>
							Time
						</option>
					</select>
				</div>{' '}
				<button className='settings--btn play--btn' onClick={checkHandler}>
					PLAY
				</button>
			</div>
		</>
	);
};

export default Settings;
