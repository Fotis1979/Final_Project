import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../../context/MyContext";
import QuestionCounter from "./QuestionCounter";
import Nav from "../../pages/Nav";
import Hints from '../rewards/Hints'
import Counter from "./Counter";
import Rewards from "../rewards/Rewards";
import arrayRandomize from '../../../hooks/arrayRandomize';
import "../../../styling/questions.css";
import Popup from '../../Popup/Popup';
import ErrorMessage from '../../errorMessage/ErrorMessage';

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    loading,
    results,
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
    answerPopup,
		setAnswerPopup,
  } = context;

  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);

  // console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);


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

	const handleCheck = (i) => {
		setSelected(i);
		setAnswerPopup(true);
		if (i === rightAnswer[indexCounter]) return setScore(score + 10) ;
		setError(false)
		
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

  // const x = (e) => {
  //   setCat(e.target.value);
  // };

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
			{error && <ErrorMessage>Please select an option first</ErrorMessage>}

			{(hints === 1 || hints === 2) && (
				<button
					className='rewards--btn'
					onClick={() =>
						wrongAnswers[indexCounter + 1].length > 1 &&
						wrongAnswers[indexCounter + 1].pop() &&
						setHints((prev) => prev - 1)
					}
				>
					{hints === 2 ? 'DoubleClick for 50/50 CHANCHE' : 'useHint'}
				</button>
			)}

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

          <p className="cat">Category : {results[indexCounter].category}</p>
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

          {/* <QuestionTimer /> */}
          <button className="play-btn" onClick={nextHandler}>next</button>
          {selected === rightAnswer[indexCounter]&&<Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
					<p>Correct answer</p></Popup>}
				{selected !== rightAnswer[indexCounter]&&<Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
					<p>wrong answer</p></Popup>}
        </header>
      </div>

{/* 
      { score % 50 === 0 && score !== 0 && !selected ?
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
      } */}

      {/* !**********!***************!******!********! */}
      <QuestionCounter />
      {/* <QuestionTimer /> */}
      {/* <Timer />
      <Counter /> */}
      {/* { questions && <p>{questions}</p> } */}
  </div>
  );
};

export default QuestionBody;
