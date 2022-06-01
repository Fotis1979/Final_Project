import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Form from '../authentication/Form';
import MyContext from '../../context/MyContext';

import ProfileHeader from './ProfileHeader';
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
				<NavLink to='/'>
					<span>Home</span>
				</NavLink>
				<NavLink to='/settings'>
					<span>PLAY NOW</span>
				</NavLink>
				{/* ProfileHeader should become the link to profile */}
				{localStorage.getItem('token') ? (
					<NavLink to='/profile'>
						<span>profile</span>
					</NavLink>
				) : (
					''
				)}
				{/* ProfileHeader should become the link to profile */}
				<NavLink to='/profile'>
					<ProfileHeader />
				</NavLink>
				{/* ProfileHeader props: username, avatarUrl (avatar = profile image that you can unlock and change*/}
				<Form />
			</div>
		</nav>
	);
};
export default Nav;
