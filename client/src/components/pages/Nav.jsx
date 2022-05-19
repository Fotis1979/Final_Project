import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from '../authentication/Form';
import MyContext from '../../context/MyContext';

import '../../styling/nav.css';

const Nav = () => {
	const context = useContext(MyContext);
	const {
		email,
		setEmail,
		pass,
		setPass,
		name,
		setName,
		avatarFile,
		setAvatarFile,
		birthDate,
		setBirthDate,
		isProfileSaved,
		setIsProfileSaved,
		loginMsg,
		setLoginMsg,
	} = context;

	return (
		<nav>
			<div className='nav--ul'>
				<Form />
				<NavLink to='/'>
					<span>Home</span>
				</NavLink>
				{localStorage.getItem('token') ? (
					<NavLink to='/profile'>
						<span>profile</span>
					</NavLink>
				) : (
					''
				)}
				<NavLink to='/settings'>
					<span>Settings</span>
				</NavLink>
			</div>
		</nav>
	);
};
export default Nav;
