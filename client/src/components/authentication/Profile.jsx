import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { Link } from 'react-router-dom';
import Nav from '../pages/Nav';
import '../../styling/profile.scss';
import av1 from './avatarImages/av1.jpg';
import av2 from './avatarImages/av2.jpg';
import av3 from './avatarImages/av3.jpg';

const img = [av1, av2, av3];
const Profile = () => {
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
		loginMsg,
		setLoginMsg,
	} = context;

	const saveHandler = () => {
		const formData = new FormData();
		formData.append('avatarFile', avatarFile);
		formData.append('userName', userName);
		formData.append('birthDate', birthDate);

		console.log(formData);

		const url = 'http://localhost:8080/profile/save';
		const options = {
			method: 'POST',
			headers: {
				'x-auth-token': localStorage.getItem('token'),
			},
			body: formData,
			//   method: "POST",
			//   headers: {
			//     "Content-Type": "application/json",
			//     "x-auth-token": localStorage.getItem("token"),
			//   },
			//   body: JSON.stringify({ name, birthDate, avatarFile }),
		};

		fetch(url, options)
			.then((response) => response.text())
			.then((result) => {
				setIsProfileSaved(true);
				alert(result);
			});
	};

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			setLoginMsg(
				<p className='fullScreenText'>
					You should <Link to={'/form'}>login</Link> to see your profile!
				</p>
			);
		} else {
			fetch('http://localhost:8080/profile/get', {
				method: 'GET',
				headers: {
					'x-auth-token': localStorage.getItem('token'),
				},
			})
				.then((response) => response.json())
				.then((result) => {
					console.log(123, result);
					setAvatarUrl(result.data.avatarUrl);
					setUserName(result.data.userName);
					setBirthDate(result.data.birthDate);
				});
		}
	}, [isProfileSaved]);

	const inputHandler = (e) => {
		//console.log(e);
		switch (e.target.name) {
			case 'userName':
				setUserName(e.target.value);
				break;

			case 'birthDate':
				setBirthDate(e.target.value);
				break;

			default:
				console.error(`There's a problem. Please check the event listener.`);
				break;
		}
	};
	console.log(userName);
	console.log(birthDate);

	const fileHandler = (e) => {
		setAvatarFile(e.target.files[0]);
	};

	// const avatarHandler = (e) => {
	//   setAvatarFile(e.target.name);
	// };
	console.log(avatarFile);
	//use this to give selected avatarImage style when selected and when not
	//I have an issue saving images to db when not using upload profile
	const [imageChosen, setImageChosen] = useState(undefined);

	return (
		<div className='profile--page'>
			<Nav />
			{loginMsg !== '' ? (
				loginMsg
			) : (
				<section className='profile--section'>
					<h1>Profile</h1>
					<img className='avatar' src={avatarUrl} alt='' />
					{/*<label htmlFor='selectAvatar'>Select Avatar </label>*/}
					{/*<input id='uploader' type='file' onChange={(e) => fileHandler(e)} />*/}

					<div class='parent-div'>
						<button class='btn-upload'>Choose Avatar</button>
						<input
							id='uploader'
							type='file'
							onChange={(e) => fileHandler(e)}
							name='upfile'
						/>
					</div>
					{/* //use this to choose between mant images and highlight the choosen one */}

					{/* <div>
            {img.map((e, i) => {
              console.log(e);
              return (
                <div
                  key={i}
                  className={
                    imageChosen === "http://localhost:3000" + e
                      ? "imageWrapSelected"
                      : "imageWrapNormal"
                  }
                >
                  <img
                    onClick={(e) => {
                      setImageChosen(e.target.src);
                      avatarHandler(e);
                      console.log("clicked", imageChosen);
                    }}
                    src={e}
                    alt={e}
                    width="50px"
                    height="50px"
                    name="aviName"
                  />
                </div>
              );
            })}
          </div> */}

					{/* <selcet>
            <div>
              <img
                className="select-avatar-img"
                src={q}
                name="avatarPic1.jpg"
                alt=""
                width="50px"
                height="50px"
                onClick={avatarHandler}
              />
              <img
                className="select-avatar-img"
                src={q}
                name="avatarPic2.jpg"
                alt=""
                width="50px"
                height="50px"
                onClick={avatarHandler}
              />
              <img
                className="select-avatar-img"
                src={q}
                name="avatarPic3.jpg"
                alt=""
                width="50px"
                height="50px"
                onClick={avatarHandler}
              />
            </div>
          </selcet> */}

					<div className='userinfo--input username--input'>
						<label htmlFor='userName'>UserName</label>
						<input
							type='text'
							name='userName'
							placeholder='userName'
							value={userName}
							onChange={inputHandler}
						/>
					</div>
					<div className='userinfo--input birthdate--input'>
						<label htmlFor='birthDate'>birthDate</label>
						<input
							type='text'
							name='birthDate'
							placeholder='Birth date'
							value={birthDate}
							onChange={inputHandler}
							maxLength={8}
						/>
					</div>

					<button className='save--btn' onClick={saveHandler}>
						Save
					</button>
				</section>
			)}
		</div>
	);
};

export default Profile;
