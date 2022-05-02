import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Link to="/questions">
        <button>start playing</button>
      </Link>
    </div>
  );
};

export default Home;
