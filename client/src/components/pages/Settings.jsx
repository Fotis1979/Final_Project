import useFetch from "../../hooks/useFetch";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import MyContext from "../../context/MyContext";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import "../../styling/settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const {
    results,
    number,
    setNumber,
    loading,
    indexCounter,
    setIndexCounter,
    eror,
    diff,
    email,
    setDiff,
    pass,

    setCat,
  } = context;

  const [s, setS] = useState("NoTime");

  // const navigate = useNavigate();

  const f = (e) => {
    setDiff(e.target.value);
  };
  const x = (e) => {
    setCat(e.target.value);
  };

  const n = (e) => {
    setNumber(e.target.value);
  };

  const gameMode = (e) => {
    setS(e.target.value);

    console.log(e.target.value);
    console.log(s);
  };
  const checkHandler = () => {
    if (s === "NoTime") {
      navigate("/questions");
    } else if (s === "Time") {
      navigate("/timeMode");
    }
  };

  console.log(diff);
  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav />
      <h1>ChOOSE SETTINGS</h1>
      {/* {s === "NoTime" ? 
       <Link to="/questions">     <button>PLAY</button>  </Link>
        :
      <Link to="/timeMode">       <button>PLAY</button>  </Link>} */}
      <button className="play-btn" onClick={checkHandler}>
        PLAY
      </button>

      <div className="settings">
        <label>Difficulty</label>

        {
          <select onChange={(e) => f(e)}>
            <option onChange={(e) => f(e)} value="easy">
              easy
            </option>
            <option onChange={(e) => f(e)} value="medium">
              medium
            </option>
            <option onChange={(e) => f(e)} value="hard">
              hard
            </option>
          </select>
        }
        <label>Categories</label>
        {
          <select onChange={(e) => x(e)}>
            <option onChange={(e) => x(e)} value="Arts">
              Arts & Literature
            </option>
            <option onChange={(e) => x(e)} value="Film">
              Film & TV
            </option>
            <option onChange={(e) => x(e)} value="Food">
              Food & Drink
            </option>
            <option onChange={(e) => x(e)} value="General Knowledge">
              General Knowledge
            </option>

            <option onChange={(e) => x(e)} value="Geography">
              Geography
            </option>

            <option onChange={(e) => x(e)} value="History">
              History
            </option>

            <option onChange={(e) => x(e)} value="Music">
              Music
            </option>

            <option onChange={(e) => x(e)} value="Science">
              Science
            </option>

            <option onChange={(e) => x(e)} value="Society">
              Society & Culture{" "}
            </option>
            <option onChange={(e) => x(e)} value="Sport">
              Sport & Leisure{" "}
            </option>
          </select>
        }

        <label htmlFor="number">Amount of Questions</label>
        <input
          className="amount"
          type="number"
          name="number"
          min="1"
          max="50"
          required="required"
          onChange={(e) => n(e)}
          value={number}
        ></input>
        <label>Game Mode</label>

        {
          <select onChange={(e) => gameMode(e)}>
            <option onChange={(e) => gameMode(e)} value="NoTime">
              NoTime
            </option>
            <option onChange={(e) => gameMode(e)} value="Time">
              Time
            </option>
          </select>
        }
      </div>
    </div>
  );
};

export default Settings;