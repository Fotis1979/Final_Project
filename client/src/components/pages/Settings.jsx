import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect, useContext } from "react";
import MyContext from "../../context/MyContext";
import { Link } from "react-router-dom";

const Settings = () => {
  const context = useContext(MyContext);
  const {
    loading,
    eror,
    results,
    incorrect,
    setIncorrect,
    allAnswers,
    setAllAnswers,
    questions,
    setQuestions,
    correctAnswer,
    setCorrectAnswer,
    diff,
    question,
    setQuestion,
    setDiff,
    cat,
    setCat,
    initialState,
    number,
    setNumber,
  } = context;

  // const url = `https://the-trivia-api.com/api/questions?limit=50&&categories=${cat}&&difficulty=${diff}`

  // const d = useFetch(url)
  // d && console.log(url);
  // d && console.log(d.results);
  // diff && cat && setQuestions(d.results)
  // questions && console.log(questions);

  const f = (e) => {
    setDiff(e.target.value);
  };
  const x = (e) => {
    setCat(e.target.value);
  };
  const n =(e) =>{
    setNumber(e.target.value);
  }
  console.log(number);
  console.log(results);
  
  

  // useEffect(() => {
  //     d &&
  //     setQuestions(d.map(e => e.d.results.question) )
  //       d &&  setIncorrect(d.results.incorrectAnswers)
  // }, [d, incorrect,setIncorrect,setQuestions,setDiff])

  // useEffect(() => {
  //     incorrect &&
  //         incorrect.length <= 3 && setAllAnswers(incorrect.push(d.results.correctAnswer))
  //     incorrect && setAllAnswers(incorrect)

  // }, [incorrect])

  // function RandomArrayShuffle(array) {
  //     var currentIndex = array.length,
  //         temporaryValue,
  //         randomIndex;

  //     while (0 !== currentIndex) {
  //         randomIndex = Math.floor(Math.random() * currentIndex);
  //         currentIndex -= 1;
  //         temporaryValue = array[currentIndex];
  //         array[currentIndex] =
  //             array[randomIndex];
  //         array[randomIndex] = temporaryValue;
  //     }
  //     return array;
  // }

  // allAnswers && RandomArrayShuffle(allAnswers)

  // useEffect(() => {
  //     allAnswers && console.log(d.results.correctAnswer)
  //     console.log(allAnswers)
  // }, [d, allAnswers,questions])

  //   d&& setCorrectAnswer(d.results.correctAnswer)
  // d && console.log(correctAnswer);
  // d && console.log(d.category);
  // console.log(diff);
  
  console.log(diff);
  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <h1>ChOOSE SETTINGS</h1>
      <Link to="/questions">
        <button>PLAY</button>
      </Link>

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

            <option onChange={(e) => f(e)} value="Society">
              Society & Culture{" "}
            </option>
            <option onChange={(e) => f(e)} value="Sport">
              Sport & Leisure{" "}
            </option>
          </select>
        }
        
        <input type='number' id="myNum" required="required" onChange={(e) => n(e)}  value={number}>
          
        </input>
        
        
      </div>
    </div>
  );
};

export default Settings;
