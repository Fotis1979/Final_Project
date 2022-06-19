import { useState, useEffect, useContext } from "react";
import MyContext from "../../context/MyContext";

import Nav from "./Nav";

import q from "../../assets/images/q.jpg";
import "../../styling/shop.scss";

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
  const [clicked5, setClicked5] = useState(false);
  const [clicked10, setClicked10] = useState(false);
  const [clicked15, setClicked15] = useState(false);
  const [clicked20, setClicked20] = useState(false);
  const [clicked25, setClicked25] = useState(false);

  const handelBuy = (e) => {
    if (diamonds >= e.target.value) {
      setDiamonds((prev) => prev - e.target.value);

      switch (e.target.value) {
        case "5":
          setClicked5(true);
          break;
        case "10":
          setClicked10(true);
          break;
        case "15":
          setClicked15(true);
          break;
        case "20":
          setClicked20(true);
          break;
        case "25":
          setClicked25(true);
          break;
        default:
          console.error(`There's a problem. Please check the event listener.`);
          break;
      }
    }
  };
  const boughtbtn = "bought";
  const buybtn = "buy";
  return (
    <div>
      <Nav />

      <div className="diamonds-shop"> diamonds :{diamonds}</div>
      <div className="avatar-shop">
        <div>
          <img src={q} alt="" width="100px" /> <p>5dimaonds</p>{" "}
          <button value="5" onClick={(e) => handelBuy(e)}>
            {!clicked5 ? buybtn : boughtbtn}
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>10 dimaonds</p>
          <button value="10" onClick={(e) => handelBuy(e)}>
            {!clicked10 ? buybtn : boughtbtn}
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>15 dimaonds</p>
          <button value="15" onClick={(e) => handelBuy(e)}>
            {!clicked15 ? buybtn : boughtbtn}
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>20 dimaonds</p>
          <button value="20" onClick={(e) => handelBuy(e)}>
            {!clicked20 ? buybtn : boughtbtn}
          </button>
        </div>
        <div>
          <img src={q} alt="" width="100px" /> <p>25 dimaonds</p>
          <button value="25" onClick={(e) => handelBuy(e)}>
            {!clicked25 ? buybtn : boughtbtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
