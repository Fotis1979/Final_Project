import { Link } from 'react-router-dom';

import Nav from '../../pages/Nav';
const Test = () => {
	return (
		<div>
			<Nav />
			<h1>Testing page for settings</h1>
			<Link to='/questions'>
				<button>start playing</button>
			</Link>
		</div>
	);
};

export default Test;
