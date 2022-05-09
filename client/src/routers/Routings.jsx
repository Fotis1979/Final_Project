import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";

import QuestionBodyNoTime from "../components/singleplayer/question/QuestionBodyNoTime";
import Settings from "../components/pages/Settings";

const Routings = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<QuestionBodyNoTime />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default Routings;
