import { NavLink } from 'react-router-dom';
import '../../styling/nav.css';
import Form from '../authentication/Form';
const Nav = () => {
	return (
		<nav>
			<div className='nav--ul'>
				<Form />
				<NavLink to='/'>
					<span>Home</span>
				</NavLink>
				<NavLink to='/settings'>
					<span>Settings</span>
				</NavLink>
			</div>
		</nav>
	);
};
export default Nav;
