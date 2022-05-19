import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import GameOver from "../components/pages/GameOver";
import QuestionBodyNoTime from '../components/singleplayer/question/QuestionBodyNoTime'
import Settings from '../components/pages/Settings'
import QuestionBodyWithTime from '../components/singleplayer/question/QuestionBodyWithTime'
;
const Routings = () => (
  <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/game_over" element={<GameOver />} />
      <Route path="/questions" element={<QuestionBodyNoTime />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/timeMode" element={<QuestionBodyWithTime />} />

    </Routes>
  </Router>
);

export default Routings;
