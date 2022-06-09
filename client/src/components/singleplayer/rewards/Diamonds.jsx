import "../../../styling/rewards.css";
import { useContext, useEffect } from "react";
import MyContext from "../../../context/MyContext";
import diamondArt from "../../../assets/images/diamondArt.png";

const Diamonds = () => {
  const context = useContext(MyContext);
  const {
    score,
    setScore,
    diamondGeo,
    setDiamondGeo,
    diamondSoc,
    setDiamondSoc,
    diamondSci,
    setDiamondFilm,
    diamondFilm,
    setDiamondSci,
    diamondFood,
    setDiamondFood,
    diamondMus,
    setDiamondMus,
    diamondSport,
    setDiamondSport,
    diamondHist,
    setDiamondHist,
    diamondGen,
    setDiamondGen,
    diamondArts,
    setDiamondArts,
    setDiamonds,
    diamonds,
    selected,
    rightAnswer,
    indexCounter,
    results,
    diff,
    setStoredScore,
    gameOver,
    img,
    setPie,
    diamondPoints,
    setDiamondPoints,
  } = context;

  useEffect(() => {
    diamondGeo.easy === true &&
      diamondGeo.medium === true &&
      diamondGeo.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGeo({ easy: false, medium: false, hard: false });
  }, [diamondGeo]);
  gameOver === true && setDiamondGeo({ easy: false, medium: false, hard: false });

  useEffect(() => {
    diamondArts.easy === true &&
      diamondArts.medium === true &&
      diamondArts.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondArts({ easy: false, medium: false, hard: false });
  }, [diamondArts]);
  gameOver === true && setDiamondArts({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondSport.easy === true &&
      diamondSport.medium === true &&
      diamondSport.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSport({ easy: false, medium: false, hard: false });
  }, [diamondSport]);
  gameOver === true && setDiamondSport({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondFood.easy === true &&
      diamondFood.medium === true &&
      diamondFood.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFood({ easy: false, medium: false, hard: false });
  }, [diamondFood]);
  gameOver === true && setDiamondFood({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondFilm.easy === true &&
      diamondFilm.medium === true &&
      diamondFilm.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFilm({ easy: false, medium: false, hard: false });
  }, [diamondFilm]);
  gameOver === true && setDiamondFilm({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondGen.easy === true &&
      diamondGen.medium === true &&
      diamondGen.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGen({ easy: false, medium: false, hard: false });
  }, [diamondGen]);
  gameOver === true && setDiamondGen({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondMus.easy === true &&
      diamondMus.medium === true &&
      diamondMus.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondMus({ easy: false, medium: false, hard: false });
  }, [diamondMus]);
  gameOver === true && setDiamondMus({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondHist.easy === true &&
      diamondHist.medium === true &&
      diamondHist.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondHist({ easy: false, medium: false, hard: false });
  }, [diamondHist]);
  gameOver === true && setDiamondHist({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondSci.easy === true &&
      diamondSci.medium === true &&
      diamondSci.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSci({ easy: false, medium: false, hard: false });
  }, [diamondSci]);
  gameOver === true && setDiamondSci({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondSoc.easy === true &&
      diamondSoc.medium === true &&
      diamondSoc.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSoc({ easy: false, medium: false, hard: false });
  }, [diamondSoc]);
  gameOver === true && setDiamondSoc({ easy: false, medium: false, hard: false });

  gameOver === true && setDiamonds(0);

  useEffect(() => {
    (diamonds === 1 ||
      diamonds === 2 ||
      diamonds === 3 ||
      diamonds === 4 ||
      diamonds === 5 ||
      diamonds === 6) &&
      setDiamondPoints(diamondPoints + 150);
  }, [diamonds]);

  useEffect(() => {
    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Geography" &&
      diff === "easy" &&
      setDiamondGeo({ ...diamondGeo, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Geography" &&
      diff === "medium" &&
      setDiamondGeo({ ...diamondGeo, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Geography" &&
      diff === "hard" &&
      setDiamondGeo({ ...diamondGeo, hard: true });
    // console.log("Geography Diamonds are : ", diamondGeo)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Arts & Literature" &&
      diff === "easy" &&
      setDiamondArts({ ...diamondArts, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Arts & Literature" &&
      diff === "medium" &&
      setDiamondArts({ ...diamondArts, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Arts & Literature" &&
      diff === "hard" &&
      setDiamondArts({ ...diamondArts, hard: true });
    // console.log("Arts Diamonds are : ", diamondArts)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "General Knowledge" &&
      diff === "easy" &&
      setDiamondGen({ ...diamondGen, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "General Knowledge" &&
      diff === "medium" &&
      setDiamondGen({ ...diamondGen, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "General Knowledge" &&
      diff === "hard" &&
      setDiamondGen({ ...diamondGen, hard: true });
    // console.log("General Knowledge Diamonds are : ", diamondGen)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Food & Drink" &&
      diff === "easy" &&
      setDiamondFood({ ...diamondFood, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Food & Drink" &&
      diff === "medium" &&
      setDiamondFood({ ...diamondFood, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Food & Drink" &&
      diff === "hard" &&
      setDiamondFood({ ...diamondFood, hard: true });
    // console.log("Food Diamonds are : ", diamondFood)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Film & TV" &&
      diff === "easy" &&
      setDiamondFilm({ ...diamondFilm, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Film & TV" &&
      diff === "medium" &&
      setDiamondFilm({ ...diamondFilm, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Film & TV" &&
      diff === "hard" &&
      setDiamondFilm({ ...diamondFilm, hard: true });
    // console.log("Film Diamonds are : ", diamondFilm)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Music" &&
      diff === "easy" &&
      setDiamondMus({ ...diamondMus, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Music" &&
      diff === "medium" &&
      setDiamondMus({ ...diamondMus, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Music" &&
      diff === "hard" &&
      setDiamondMus({ ...diamondMus, hard: true });
    // console.log("Music Diamonds are : ", diamondMus)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Society & Culture" &&
      diff === "easy" &&
      setDiamondSoc({ ...diamondSoc, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Society & Culture" &&
      diff === "medium" &&
      setDiamondSoc({ ...diamondSoc, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Society & Culture" &&
      diff === "hard" &&
      setDiamondSoc({ ...diamondSoc, hard: true });
    // console.log("Society Diamonds are : ", diamondSoc)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Sport & Leisure" &&
      diff === "easy" &&
      setDiamondSport({ ...diamondSport, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Sport & Leisure" &&
      diff === "medium" &&
      setDiamondSport({ ...diamondSport, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Sport & Leisure" &&
      diff === "hard" &&
      setDiamondSport({ ...diamondSport, hard: true });
    // console.log("Sport Diamonds are : ", diamondSport)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Science" &&
      diff === "easy" &&
      setDiamondSci({ ...diamondSci, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Science" &&
      diff === "medium" &&
      setDiamondSci({ ...diamondSci, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "Science" &&
      diff === "hard" &&
      setDiamondSci({ ...diamondSci, hard: true });
    // console.log("Science Diamonds are : ", diamondSci)

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "History" &&
      diff === "easy" &&
      setDiamondHist({ ...diamondHist, easy: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "History" &&
      diff === "medium" &&
      setDiamondHist({ ...diamondHist, medium: true });

    selected === rightAnswer[indexCounter] &&
      results[indexCounter].category === "History" &&
      diff === "hard" &&
      setDiamondHist({ ...diamondHist, hard: true });
    // console.log("History Diamonds are : ", diamondHist)
  }, [selected]);

  useEffect(() => {
    diamonds === 6 && setPie(true);
  }, [diamonds]);

  useEffect(() => {
//  console.log("DIAMONDS ARE : ", diamonds);
  }, [diamonds,indexCounter]);

  return (
    <div>
      {diamondGeo.easy === true &&
        diamondGeo.medium === true &&
        diamondGeo.hard === true && (
          <img
            className="diamondArt"
            src={diamondArt}
            alt="Diamond_geography"
          />
        )}
      {diamondArts.easy === true &&
        diamondArts.medium === true &&
        diamondArts.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_art" />
        )}
      {diamondSport.easy === true &&
        diamondSport.medium === true &&
        diamondSport.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_sports" />
        )}
      {diamondFood.easy === true &&
        diamondFood.medium === true &&
        diamondFood.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_food" />
        )}
      {diamondFilm.easy === true &&
        diamondFilm.medium === true &&
        diamondFilm.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_film" />
        )}
      {diamondGen.easy === true &&
        diamondGen.medium === true &&
        diamondGen.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_gen" />
        )}
      {diamondMus.easy === true &&
        diamondMus.medium === true &&
        diamondMus.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_music" />
        )}
      {diamondHist.easy === true &&
        diamondHist.medium === true &&
        diamondHist.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_history" />
        )}
      {diamondSci.easy === true &&
        diamondSci.medium === true &&
        diamondSci.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_science" />
        )}
      {diamondSoc.easy === true &&
        diamondSoc.medium === true &&
        diamondSoc.hard === true && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_social" />
        )}
    </div>
  );
};

export default Diamonds;
