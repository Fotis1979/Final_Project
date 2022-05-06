import React from "react";
import Nav from "../../pages/Nav";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import "../../../styling/settings.css";
import Categories from "../../../Data/Categories";
import useFetch from "../../../hooks/useFetch";
import q from "../../../assets/images/q.jpg";

const Settings = () => {
  const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };

  const context = useContext(MyContext);
  const {
    category,
    setCategory,
    difficulty,
    setDifficulty,
    error,
    setError,
    gameMode,
    setGameMode,
    number,
    setNumber,
    questions,
    gameOver,
  } = context;

  const url = `https://the-trivia-api.com/api/questions?categories=${category}&difficulty=${difficulty}`;

  const initialState = { results: null, loading: true, error: null };
  const { results } = useFetch(url, initialState);
  console.log(results);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!gameMode || !difficulty || !category) {
      setError(true);
      return;
    } else {
      setError(false);
      navigate("/questions");
    }
  };
  console.log(category);
  return (
    <div>
      <Nav />

      <div className="content">
        <div className="settings">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <label htmlFor="Game-Mode" className="select"></label>
          <select
            name="Game-Mode"
            onChange={(e) => setGameMode(e.target.value)}
          >
            <option value="" disabled="disabled" selected="defaultValue">
              Game Mode
            </option>
            <option>random</option>
            <option>multi choice</option>
          </select>
          <label className="select" htmlFor="difficulty"></label>
          <select
            name="difficulty"
            required="required"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <option value="" disabled="disabled" selected="defaultValue">
              Difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label className="select" htmlFor="categories"></label>
          <select
            name="categories"
            required="required"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="" disabled="disabled" selected="defaultValue">
              Category
            </option>
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          {/* <label className='select' htmlFor="number"></label>
        <select name='number' required="required" onChange={(e) => setNumber(e.target.value)} value={number}>
        <option value="" disabled="disabled" selected="defaultValue">Number of Questions</option>
        <option value='5'>5</option>
        </select> */}
        </div>
        <button onClick={handleSubmit} className="play-btn">
          play now
        </button>
      </div>
    </div>
  );
};

export default Settings;
