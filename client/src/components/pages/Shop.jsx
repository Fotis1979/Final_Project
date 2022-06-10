import React from "react";

import { useState, useEffect, useContext } from "react";

import MyContext from "../../context/MyContext";
import Nav from "./Nav";
import "./shop.css";
import q from "../../assets/images/q.jpg";
const Shop = () => {
  const context = useContext(MyContext);
  const {
    email,
    setEmail,
    pass,
    setPass,
    highScore,
    setHighScore,
    setHints,
    setHighScoreResult,
    setDiamonds,
    diamonds,
  } = context;
  const [diam, setDiam] = useState(10);

  const handelBuy = (e) => {
    if (diamonds >= e.target.value) {
      setDiamonds((prev) => prev - e.target.value);
    }
  };
  return (
    <div>
      <Nav />

      <div className="diamonds-shop"> diamonds :{diamonds}</div>
      <div className="avatar-shop">
        <div>
          <img src={q} alt="" width="100px" /> <p>5dimaonds</p>{" "}
          <button value="5" onClick={(e) => handelBuy(e)}>
            buy
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>10 dimaonds</p>
          <button value="10" onClick={(e) => handelBuy(e)}>
            buy
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>15 dimaonds</p>
          <button value="15" onClick={(e) => handelBuy(e)}>
            buy
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>20 dimaonds</p>
          <button value="20" onClick={(e) => handelBuy(e)}>
            buy
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>25 dimaonds</p>
          <button value="25" onClick={(e) => handelBuy(e)}>
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
