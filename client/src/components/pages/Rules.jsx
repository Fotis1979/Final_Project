import React from 'react';
import { useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';

const Rules = () => {
	const context = useContext(MyContext);
	const { helloMsg, setHelloMsg } = context;
	useEffect(() => {
		console.log('HELLLOMSG IS : ', helloMsg);
	}, [helloMsg]);

	return (
		<div className='rules'>
			<p>.Game is divided in 3 Rounds of 6 Questions each</p>
			<p>.In every game U compete in 6 random question categories </p>
			<p>
				.Each of 3 rounds includes the same categories but the difficulty level
				increases for each round
			</p>
			<br />
			<p style={{ color: '#18a0fb' }}>1st Round (EASY) :</p>
			<p>+10 points for each RIGHT answer</p>
			<p>-7 points for each WRONG answer</p>
			<br />
			<p style={{ color: '#18a0fb' }}>2nd Round (MEDIUM) : </p>
			<p>+15 points for each RIGHT answer</p>
			<p>-5 points for each WRONG answer</p>
			<br />
			<p style={{ color: '#18a0fb' }}>2nd Round (HARD) :</p>
			<p>+20 points for each RIGHT answer</p>
			<p>-5 points for each WRONG answer</p>
			<br />
			<p style={{ color: '#18a0fb' }}>STREAK FEATURE :</p>
			<p>Give 3 or more RIGHT answers in a row and increase your STREAK</p>
			<p style={{ color: '#18a0fb' }}>STREAK.POINTS :</p>
			<p>STREAK IS 3 : 20 POINTs</p>
			<p>STREAK IS 4 : 30 POINTs</p>
			<p>STREAK IS 5 : 50 POINTs</p>
			<p>STREAK IS 6 : 100 POINTs</p>
			<p>
				STREAK is automatically turned to "0" in the beginning of each Round !!!
			</p>
			<br />
			<p style={{ color: '#18a0fb' }}>DIAMONDS :</p>
			<p>
				In the Diamonds (3rd) Round, WIN a DIAMOND if having answered RIGHT in
				all 3 questions of EACH category{' '}
			</p>
			<p style={{ color: '#18a0fb' }}>DIAMOND.POINTS :</p>
			<p>U get 150 Points for EVERY DIAMOND !!!</p>
			<p>
				Get all 6 DIAMONDS and complete the DIAMOND-PIE for another +199 Points
				as a bonus{' '}
			</p>
			<p style={{ color: 'blue', height: '16px' }}>HAVE FUN !!!</p>

			<button className='next--btn' onClick={() => setHelloMsg(false)}>
				Close
			</button>
		</div>
	);
};

export default Rules;
