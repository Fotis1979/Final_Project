import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Nav from "./Nav";
import arrayRandomize from "../../hooks/arrayRandomize";
import "../../../src/styling/settings.css";
import useFetch from "../../hooks/useFetch";

const Settings = () => {
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const {
    loading,
    setCategories,
    gameOver,
    eror,
    setGameDiff,
    categories,
    mode,
    setMode,
    url,
    initialState,
    results
  } = context;


  useEffect(() => {
    setCategories(arrayRandomize(categories))
    
    }, [setCategories])

  const gameDifficulty = (e) => {
    setGameDiff(e.target.value);
  };

  const gameMode = (e) => {
    setMode(e.target.value);
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
        <button
          className="play-btn"
          onClick={(e) => gameDifficulty(e)}
          value={"easy"}
        >
          {" "}
          BEgiNNer MODE{" "}
        </button>

        <button
          className="play-btn"
          onClick={(e) => gameDifficulty(e)}
          value={"medium"}
        >
          {" "}
          AdVanceD MODE{" "}
        </button>

        <button
          className="play-btn"
          onClick={(e) => gameDifficulty(e)}
          value={"hard"}
        >
          {" "}
          ExPeRT MODE{" "}
        </button>

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
