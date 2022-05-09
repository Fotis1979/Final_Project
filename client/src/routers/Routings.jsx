import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';

import Questions from '../components/pages/Questions';
import QuestionBodyNoTime from '../components/singleplayer/question/QuestionBodyNoTime';
import Settings from '../components/pages/Settings';
import Test from '../components/singleplayer/settings/Test';
import QuestionBodyWithoutTime from '../components/singleplayer/question/QuetsionBodyWithoutTime';

const Routings = () => (
	<Router>
		<Routes>
			<Route path='/timeMode' element={<QuestionBodyWithoutTime />} />
			<Route path='/' element={<Home />} />

			<Route path='/questions' element={<QuestionBodyNoTime />} />
			<Route path='/settings' element={<Settings />} />
		</Routes>
	</Router>
);

export default Routings;
