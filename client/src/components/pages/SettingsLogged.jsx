import useFetch from '../../hooks/useFetch';
import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import MyContext from '../../context/MyContext';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import arrayRandomize from '../../hooks/arrayRandomize';
import '../../../src/styling/settings.scss';

const Settings = () => {
	const navigate = useNavigate();
	const context = useContext(MyContext);
	const {
		selected,
		setClicked,
		clicked,
		results,
		number,
		setNumber,
		loading,
		indexCounter,
		setIndexCounter,
		difficulty,
		eror,
		diff,
		email,
		setDiff,
		pass,
		setUsername,
		username,
		setCat,
		setGameDiff,
		categories,
		setCategories,
		gameOver,
	} = context;

	useEffect(() => {
		setUsername(email);
		console.log(username);
	}, [email, setUsername, username]);

	const [mode, setMode] = useState('NoTime');

	const gameDifficulty = (e) => {
		setGameDiff(e.target.value);
	};

	useEffect(() => {
		gameOver === false && setCategories(arrayRandomize(categories).slice(4));
	}, []);

	// const navigate = useNavigate();

	const df = (e) => {
		setDiff(e.target.value);
		setClicked(true);
	};
	// const x = (e) => {
	//   setCat(e.target.value);
	// };

	const n = (e) => {
		setNumber(e.target.value);
	};

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
		<div className='qa--section'>
			<Nav />

			{/* {s === "NoTime" ?
       <Link to="/questions">     <button>PLAY</button>  </Link>
        :
      <Link to="/timeMode">       <button>PLAY</button>  </Link>} */}
			<button className='play-btn' onClick={checkHandler}>
				PLAY
			</button>
			<h1>ChOOSE SETTINGS</h1>
			<div className='settings'>
				{/* <label>Difficulty</label>

        {
          <select onChange={(e) => f(e)}>
            <option onChange={(e) => f(e)} value="easy">
              easy
            </option>
            <option onChange={(e) => f(e)} value="medium">
              medium
            </option>
            <option onChange={(e) => f(e)} value="hard">
              hard
            </option>
          </select>
        }
        <label>Categories</label>
        {
          <select onChange={(e) => x(e)}>
            <option onChange={(e) => x(e)} value="Arts">
              Arts & Literature
            </option>
            <option onChange={(e) => x(e)} value="Film">
              Film & TV
            </option>
            <option onChange={(e) => x(e)} value="Food">
              Food & Drink
            </option>
            <option onChange={(e) => x(e)} value="General Knowledge">
              General Knowledge
            </option>

            <option onChange={(e) => x(e)} value="Geography">
              Geography
            </option>

            <option onChange={(e) => x(e)} value="History">
              History
            </option>

            <option onChange={(e) => x(e)} value="Music">
              Music
            </option>

            <option onChange={(e) => x(e)} value="Science">
              Science
            </option>

            <option onChange={(e) => x(e)} value="Society">
              Society & Culture{" "}
            </option>
            <option onChange={(e) => x(e)} value="Sport">
              Sport & Leisure{" "}
            </option>
          </select>
        } */}

				<button
					className='play-btn'
					onClick={(e) => gameDifficulty(e)}
					value={'easy'}
				>
					{' '}
					BEgiNNer MODE{' '}
				</button>

				<button
					className='play-btn'
					onClick={(e) => gameDifficulty(e)}
					value={'medium'}
				>
					{' '}
					AdVanceD MODE{' '}
				</button>

				<button
					className='play-btn'
					onClick={(e) => gameDifficulty(e)}
					value={'hard'}
				>
					{' '}
					ExPeRT MODE{' '}
				</button>

				{/* <label> Amount of Questions</label> */}

				{/* <select onChange={(e) => n(e)}>

        <option


          className="amount"
          required="required"
          onChange={(e) => n(e)}
          value="33"
        >18</option>
          </select> */}
				<label>Game Mode</label>

				{
					<select onChange={(e) => gameMode(e)}>
						<option onChange={(e) => gameMode(e)} value='NoTime'>
							NoTime
						</option>
						<option onChange={(e) => gameMode(e)} value='Time'>
							Time
						</option>
					</select>
				}
			</div>
		</div>
	);
};

export default Settings;
