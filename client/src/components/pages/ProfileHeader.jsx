import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import '../../styling/profileheader.scss';
import avatar2 from '../../assets/images/avatar2.jpg';
import star from '../../assets/images/0star.png';
import diamond from '../../assets/images/0diamond.png';

//props: user name, selected (avatar)profile-image
const ProfileHeader = () => {
	const context = useContext(MyContext);

	return (
		<>
			<div className='profile--header'>
				<div className='header--container'>
					<div className='avatar--container'>
						<img className='header--avatar' src={avatar2} alt='avatar' />
					</div>
					<h3>User Luca</h3>
					<p>Rank Beginner</p>
					{/* stats */}
					<div className='header--stats'>
						<p>Highscore:</p>
						<img className='stats--stars' src={star} alt='star' />
						<p>Diamonds:</p>
						<img className='stats--diamond' src={diamond} alt='diamond' />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileHeader;
