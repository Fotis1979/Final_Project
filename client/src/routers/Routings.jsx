import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Questions from "../components/pages/Questions";
//import Settings from "../components/singleplayer/settings/Settings";
import Settings from "../components/pages/Settings";
import Test from "../components/singleplayer/settings/Test";

const Routings = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default Routings;
