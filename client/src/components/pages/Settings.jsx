import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import Nav from './Nav';
import arrayRandomize from '../../hooks/arrayRandomize';
import '../../styling/settings.scss';
import useSound from 'use-sound';
import correctanswer from '../../assets/sounds/correctanswer.mp3';
import Rules from './Rules';

const Settings = () => {
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const {

    setHelloMsg,
    settings, setSettings,
    setStreak,
    setDiamonds,
    loading,
    setCategories,
    gameOver,
    eror,
    setGameDiff,
    categories,
    mode,
    setMode,
    indexCounter,
    setIndexCounter,
    setGameOver,
    setDiff,
    setScore,
    setHints,
    setSelected,
    setTimeUp,
    setDiamondPoints,
    setPie,
    setMessagePie,
    setMessageDiamonds,
    setSeconds,
    setHintPoints,
    setQuestionCount,
    questionCount,
    helloMsg

  } = context;

  useEffect(() => {

    setSettings(false)
    setHintPoints(0)
    setTimeUp(false)
    setMessagePie("")
    setMessageDiamonds("")
    setPie(false)
    setDiamonds(0)
    setSeconds(0)
    setDiamondPoints(0)
    setDiff("easy")
    setSelected(null)
    setScore(0)
    setHints(0)
    setIndexCounter(0)
    setStreak(0)
    setDiamonds(0)
    setGameDiff("easy")
    console.log("QUESTIONCOUNT IS : ", questionCount);

  }, [setIndexCounter, indexCounter])

  setQuestionCount(0)

  questionCount === 0 && setMessageDiamonds(false)

  useEffect(() => {
    console.log("SETTINGS ARE: ", settings);
  }, [settings])


  useEffect(() => {
    settings === true && setGameOver(false)
    console.log(gameOver);
    console.log(indexCounter);

  }, [setGameOver, questionCount])


  useEffect(() => {
    setIndexCounter(0)
    console.log(indexCounter);

  }, [indexCounter, setIndexCounter])


  useEffect(() => {
    setCategories(arrayRandomize(categories))

  }, [setCategories, categories])


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


  const [playR] = useSound(correctanswer);

  // settings === true && playR()


  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (

    <>
      <Nav />
      <div className="qa--section">
        {helloMsg === true && <Rules />}

        {helloMsg !== true && <div>
          {helloMsg === false && <button className="next--btn2" onClick={() => setHelloMsg(true)}>RULES</button>}
          <div className="settings">

            {helloMsg !== true && <h1 >ChOOSE SETTINGS</h1>}
            {helloMsg !== true && <button className="settings--btn"
              onClick={(e) => gameDifficulty(e)}
              value={"easy"}
            >
              {" "}
              BEgiNNer MODE{" "}
            </button>}

            {helloMsg !== true && <button

              className="settings--btn"
              onClick={(e) => gameDifficulty(e)}
              value={"medium"}
            >
              {" "}
              AdVanceD MODE{" "}
            </button>}

            {helloMsg !== true && <button

              className="settings--btn"
              onClick={(e) => gameDifficulty(e)}
              value={"hard"}
            >
              {" "}
              ExPeRT MODE{" "}
            </button>}

            {helloMsg !== true && <label >Game Mode</label>}

            {helloMsg !== true && <select className="settings--mode" onChange={(e) => gameMode(e)}>

              <option onChange={(e) => gameMode(e)} value="NoTime">
                NoTime
              </option>
              <option onChange={(e) => gameMode(e)} value="Time">
                Time
              </option>
            </select>}

          </div>
          {helloMsg !== true && <button className="settings--btn play--btn" onClick={checkHandler}>
            PLAY
          </button>}
        </div>}
      </div>

    </>
  );
};

export default Settings;
