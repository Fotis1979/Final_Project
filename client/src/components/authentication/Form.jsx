import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import '../../styling/form.css';

const Form = () => {
	const context = useContext(MyContext);
	const { email, setEmail, pass, setPass } = context;
	const navigate = useNavigate();

	// useEffect(() => {
	//   if (localStorage.getItem("token")) {
	//     navigate("/profile");
	//   }
	// }, []);

	console.log('email:', email);
	console.log('pass:', pass);
	console.log({ email, pass });

	const inputHandler = (e) => {
		//console.log(e);
		switch (e.target.name) {
			case 'email':
				setEmail(e.target.value);
				break;

			case 'pass':
				setPass(e.target.value);
				break;

			default:
				console.error(`There's a problem. Please check the event listener.`);
				break;
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	const loginHandler = () => {
		const url = 'http://localhost:8080/auth/login';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, pass }),
		};

		fetch(url, options)
			.then((response) => response.json())
			.then((result) => {
				if (result.token !== undefined) {
					localStorage.setItem('token', result.token);
					localStorage.setItem('email', email);
					setEmail(email);
					navigate('/settings');
				} else {
					alert(result.msg);
				}
				//alert(result);
			});
	};

	const registerHandler = () => {
		const url = 'http://localhost:8080/auth/register';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, pass }),
		};

		fetch(url, options)
			.then((response) => response.text())
			.then((result) => {
				alert(result);
			});
	};

	return (
		<form className='nav--form' onSubmit={submitHandler}>
			<div className='nav--inputs'>
				<input
					name='email'
					type='email'
					placeholder='Email Address'
					value={email}
					onChange={inputHandler}
				/>
				<input
					name='pass'
					type='password'
					placeholder='Password'
					value={pass}
					onChange={inputHandler}
				/>
			</div>
			<div>
				<button className='login--btn' onClick={loginHandler}>
					Login
				</button>
				<button className='register--btn' onClick={registerHandler}>
					Register
				</button>
			</div>
		</form>
	);
};
export default Form;
