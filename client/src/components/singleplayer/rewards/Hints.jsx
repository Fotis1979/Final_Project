import { useContext } from 'react';
import MyContext from '../../../context/MyContext';

const Hints = () => {
  const context = useContext(MyContext);

	const { hints } = context;

	return (
		<div className='rewards--btn'>
			<span>HINTS : {hints}</span>
			
		</div>
		
	);
};

export default Hints;
