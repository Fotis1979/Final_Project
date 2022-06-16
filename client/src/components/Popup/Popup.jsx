import React from 'react';
import '../../styling/popup.scss';
import { useNavigate } from 'react-router';

function Popup(props) {
	const nav = useNavigate();
	const trigger = () => {
		nav('/settings');
	};
	const tm = () => {
		props.setTrigger(false);
	};
	return (
		props.trigger && (
			<>
				<div className='qa--section2'>
					<button className='next--btn' onClick={trigger}>
						LEAVE{' '}
					</button>
					<button className='next--btn' onClick={tm}>
						STAY
					</button>
					{props.children}
				</div>
			</>
		)
	);
}

export default Popup;
