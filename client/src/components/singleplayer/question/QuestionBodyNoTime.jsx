import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../../context/MyContext";
import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questions.css";
import Rewards from "../rewards/Rewards";
import Nav from "../../pages/Nav";
import Popup from '../../Popup/Popup'
import x from '../../../assets/images/x.png'


const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    setAnswerPopup,
    loading,
    cat,
    setCat,
    setStoredScore,
    setError,
    number,
    eror,
    hints,
    setHints,
    questionArray,
    wrongAnswers,
    rightAnswer,
    score,
    error,
    setScore,
    firstCat,
    setFirstCat,
    answerPopup

  } = context;

  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);

  const handleCheck = (i) => {
    setSelected(i);
    setAnswerPopup(true);
    if (i === rightAnswer[indexCounter]) return setScore(score + 10);
    setError(false);
    }; 
  useEffect(() => {
    console.log(rightAnswer[indexCounter])
  }, [indexCounter])

  const nav = useNavigate();

  indexCounter === (number - 1) + 1 && setStoredScore(score)
  indexCounter === (number - 1) + 1 && nav("/game_over");

  const handleSelect = (i) => {

    if (selected === i && selected === rightAnswer[indexCounter])
      return "select";
    else if (selected === i && selected !== rightAnswer[indexCounter])
      return "wrong";
    else if (i === rightAnswer[indexCounter]) return "select";
  };


 	const nextHandler = () => {
		// console.log("first");
		if (selected) {setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
			setSelected();
		} else setError(true);
		
	};


  const answers = [];

  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));

  const categories = []
  categories.push("arts", "film", "food", "general knowledge", "geography", "history", "music", "science", "society", "sport")


  // useEffect(() => {
  //   setFirstCat(cat)
  //   console.log("firstCat is :", cat);

  // }, [])

  

  const pop = (e) => {

    e.pop()
    setHints((prev) => (prev - 1))
  }

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav />
      <Rewards />

      <div className="qa--section">
        <header className="App-header">
          <div className="questions--section ">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="answers--section ">
            {answers.sort().map((el, index) => (
              <div key={index} className="align-items">
                <button
                  value={el}
                  className={`singleOption  ${selected && handleSelect(el)}`}
                  key={el}
                  onClick={() => handleCheck(el)}
                  disabled={selected}
                >
                  {index + 1 + "." + el}
                </button>
              </div>
            ))}
          </div>

          <p className="cat">Category : {cat}</p>
          {!selected && (hints === 1 || hints >= 2) && wrongAnswers[indexCounter].length >= 2 &&
            (
              <button
                className="Counter"
                onClick={() =>
                  pop(wrongAnswers[indexCounter])
                }
              >
                {hints >= 2 ? "DoubleClick for 50/50 CHANCE" : hints === 1 && "useHint"}
              </button>
            )}

          <button className="play-btn" onClick={nextHandler}>next</button>
          {selected === rightAnswer[indexCounter]&&<Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
					<p>Correct answer</p></Popup>}
				{selected !== rightAnswer[indexCounter]&&<Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
					<p>wrong answer</p></Popup>}
        </header>
      </div>

      {score % 50 === 0 && score !== 0 && !selected ?
        <select onChange={(e) => x(e)}>
          <option >
            Choose new CateGory
          </option>

          {arrayRandomize(categories).map(e => e !== firstCat && <option onChange={(e) => x(e)}
            key={e}
            value={e}>
            {e}
          </option>).slice(7)}
          <option onChange={() => x(firstCat)} value={firstCat}>
            YOUR INITIAL CATEGORY
          </option>
         
        </select>
        : setCat(cat)
      }
    </div>
  );
};

export default QuestionBody;