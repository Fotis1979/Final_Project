import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Nav from "./Nav";
import "../../../src/styling/settings.css";
import { Link } from "react-router-dom";
const Settings = () => {

  const navigate = useNavigate();
  const context = useContext(MyContext);
  const {
    setSeconds,
    loading,
    eror,
    setGameDiff
  } = context;

  const [mode, setMode] = useState("NoTime");
  const [s, setS] = useState("NoTime"); 

  const gameDifficulty = (e) => {
    setGameDiff(e.target.value)
  }

  // const n = (e) => {
  //   setNumber(e.target.value);
  // };

  const gameMode = (e) => {
    setMode(e.target.value);
    console.log(mode);
  };
  
  const checkHandler = () => {
    if (mode === "NoTime") {
      navigate("/questions");
    } else if (mode === "Time") {
      navigate("/timeMode");
    }
  };

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div className="qa--section">
      <Nav />

      <button className="play-btn" onClick={checkHandler}>
        PLAY
      </button>
      <h1>ChOOSE SETTINGS</h1>
      <div className="settings">
      
        <button className="play-btn" onClick={(e) => gameDifficulty(e)} value={"easy"}> BEgiNNer MODE  </button>

        <button className="play-btn" onClick={(e) => gameDifficulty(e)} value={"medium"}> AdVanceD MODE  </button>

        <button className="play-btn" onClick={(e) => gameDifficulty(e)} value={"hard"}> ExPeRT MODE  </button>

      
        <label>Game Mode</label>

        <select className="settings--mode" onChange={(e) => gameMode(e)}>
          <option onChange={(e) => gameMode(e)} value="NoTime">
            NoTime
          </option>
          <option onChange={(e) => gameMode(e)} value="Time">
            Time
          </option>
        </select>

     
      </div>
    </div>
  );
};

export default Settings;
