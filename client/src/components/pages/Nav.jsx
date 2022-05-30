import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../authentication/Form';
import '../../styling/nav.css';


const Nav = () => {

	return (
		<nav>
			<div className='nav--ul'>
				<Form />
				{localStorage.getItem('token') ? (
					<NavLink to='/highScore'>
						<span>HighScore</span>
					</NavLink>
				) : (
					''
				)}
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
