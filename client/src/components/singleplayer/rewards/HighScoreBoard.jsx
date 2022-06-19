import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Nav from '../../pages/Nav';
import MyContext from '../../../context/MyContext';

import '../../../styling/highScoreBoard.scss';

const HighScoreBoard = () => {
	//TODO: display users highScore and users Avatar
	//from dataBase
	//let user sees all users highScores and avatars

	const context = useContext(MyContext);
	const {
		hints,
		highScore,
		email,
		setEmail,
		pass,
		setPass,
		userName,
		setUserName,
		avatarUrl,
		setAvatarUrl,
		avatarFile,
		setAvatarFile,
		birthDate,
		setBirthDate,
		isProfileSaved,
		setIsProfileSaved,
		setHighScoreResult,
		highScoreResult,
		loginMsg,
		setLoginMsg,
	} = context;

	const [collectionProfiles, setCollectionProfiles] = useState([]);
	const [collectionRewards, setCollectionRewards] = useState([]);

	// useEffect(() => {
	//   if (!localStorage.getItem("token")) {
	//     setLoginMsg(
	//       <p className="fullScreenText">
	//         You should <Link to={"/form"}>login</Link> to see your profile!
	//       </p>
	//     );
	//   } else {
	//     fetch("http://localhost:8080/rewards/get", {
	//       method: "GET",
	//       headers: {
	//         "x-auth-token": localStorage.getItem("token"),
	//       },
	//     })
	//       .then((response) => response.json())
	//       .then((result) => {
	//         console.log(123, result);

	//         setHighScoreResult(result.data.highScoreResult);
	//       });
	//   }
	// }, []);

	// useEffect(() => {
	//   if (!localStorage.getItem("token")) {
	//     setLoginMsg(
	//       <p className="fullScreenText">
	//         You should <Link to={"/form"}>login</Link> to see your profile!
	//       </p>
	//     );
	//   } else {
	//     fetch("http://localhost:8080/profile/get", {
	//       method: "GET",
	//       headers: {
	//         "x-auth-token": localStorage.getItem("token"),
	//       },
	//     })
	//       .then((response) => response.json())
	//       .then((result) => {
	//         console.log(123, result);
	//         setAvatarUrl(result.data.avatarUrl);
	//         setUserName(result.data.userName);
	//         setBirthDate(result.data.birthDate);
	//       });
	//   }
	// }, []);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			setLoginMsg(
				<p className='fullScreenText'>
					You should <Link to={'/form'}>login</Link> to see your profile!
				</p>
			);
		} else {
			fetch('http://localhost:8080/collection/Profiles', {
				method: 'GET',
				headers: {
					'x-auth-token': localStorage.getItem('token'),
				},
			})
				.then((response) => response.json())
				.then((result) => {
					// console.log("result length", result.data[0].hints);
					setCollectionProfiles(result.data);
					console.log('collection profiles is', collectionProfiles);
				});
		}
	}, []);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			setLoginMsg(
				<p className='fullScreenText'>
					You should <Link to={'/form'}>login</Link> to see your profile!
				</p>
			);
		} else {
			fetch('http://localhost:8080/collection/Rewards', {
				method: 'GET',
				headers: {
					'x-auth-token': localStorage.getItem('token'),
				},
			})
				.then((response) => response.json())
				.then((result) => {
					// console.log("result length", result.data[0].hints);
					setCollectionRewards(result.data);
					console.log('collection rewards is', collectionRewards);
				});
		}
	}, []);

	return (
		<>
			<Nav />
			<div className='collection--container'>
				{collectionProfiles.map((el, index) => (
					<div className='user--container' key={index}>
						<div>
							<img
								src={`http://localhost:8080/${el.avatarName}`}
								alt=''
								width='200px'
							/>
							<div className='user-stats'>
								<h3> {el.userName}</h3>
								<p> {el.highScoreResult} points</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* <div>
        {collectionRewards.map((el) => (
          <div></div>
        ))}
      </div> */}
		</>
	);
};

export default HighScoreBoard;
