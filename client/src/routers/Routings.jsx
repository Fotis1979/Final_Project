import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import GameOver from "../components/pages/GameOver";
import QuestionBodyNoTime from "../components/singleplayer/question/QuestionBodyNoTime";
import Settings from "../components/pages/Settings";
import QuestionBodyWithTime from "../../src/components/singleplayer/question/QuestionBodyWithTime";
import Form from "../components/authentication/Form";
import Profile from "../components/authentication/Profile";
import HighScoreBoard from "../components/singleplayer/rewards/HighScoreBoard";
import HighScore from "../components/singleplayer/rewards/HighScore";
import Shop from "../components/pages/Shop";

const Routings = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game_over" element={<GameOver />} />
      <Route path="/questions" element={<QuestionBodyNoTime />} />
      <Route path="/form" element={<Form />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/highScoreBoard" element={<HighScoreBoard />} />
      <Route path="/highScore" element={<HighScore />} />
      <Route path="/timeMode" element={<QuestionBodyWithTime />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
);

export default Routings;
