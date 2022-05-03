import React from "react";
import { Link } from "react-router-dom";
import "../../styling/home.css";

import Nav from "./Nav";
import homescreen from "../../assets/images/homescreen.png";
const Home = () => {
  return (
    <div>
      <Nav />
      <img className="home-screen-bg" src={homescreen} alt="home back ground" />
      <Link to="/settings">
        <button>set the game</button>
      </Link>
    </div>
  );
};

export default Home;
