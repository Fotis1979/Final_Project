import "../../../styling/diamonds.scss";
import { useContext, useEffect } from "react";
import MyContext from "../../../context/MyContext";
import diamondArt from "../../../assets/images/diamondArt.png";

const Diamonds = () => {
  const context = useContext(MyContext);
  const {

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
    gameOver,
    setPie,
    diamondPoints,
    setDiamondPoints,
    setCircleArts,
    setCircleArts2,
    setCircleGeo,
    setCircleGeo2,
    setCircleFood,
    setCircleFood2,
    setCircleGen,
    setCircleGen2,
    setCircleFilm,
    setCircleFilm2,
    setCircleSport,
    setCircleSport2,
    setCircleSoc,
    setCircleSoc2,
    setCircleSci,
    setCircleSci2,
    setCircleMus,
    setCircleMus2,
    setCircleHist,
    setCircleHist2,
    setImgC
  } = context;

  useEffect(() => {
    diamondGeo.easy === true &&
      diamondGeo.medium === true &&
      diamondGeo.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGeo({ easy: false, medium: false, hard: false });
  }, [diamondGeo]);

  useEffect(() => {
    diamondGeo.easy === true && setCircleGeo(true)
    diamondGeo.medium === true && setCircleGeo2(true)
    diamondGeo.hard === true && setCircleGeo(false)
    diamondGeo.hard === true && setCircleGeo2(false)
    diamondGeo === {easy: true, medium: true, hard: true }  && setImgC(diamondArt)  }, [diamondGeo,setImgC]);

  gameOver === true && setDiamondGeo({ easy: false, medium: false, hard: false });

  useEffect(() => {
    diamondArts.easy === true &&
      diamondArts.medium === true &&
      diamondArts.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondArts({ easy: false, medium: false, hard: false });
  }, [diamondArts]);
  
  useEffect(() => {
    diamondArts.easy === true && setCircleArts(true)
    diamondArts.medium === true && setCircleArts2(true)

    diamondArts.hard === true && setCircleArts(false)
    diamondArts.hard === true && setCircleArts2(false)
    diamondArts === {easy: true, medium: true, hard: true }  && setImgC(diamondArt)  }, [diamondArts,setImgC]);

  gameOver === true && setDiamondArts({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondSport.easy === true &&
      diamondSport.medium === true &&
      diamondSport.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSport({ easy: false, medium: false, hard: false });
  }, [diamondSport]);

  useEffect(() => {
    diamondSport.easy === true && setCircleSport(true)
    diamondSport.medium === true && setCircleSport2(true)
    diamondSport.hard === true && setCircleSport(false)
    diamondSport.hard === true && setCircleSport2(false)
    diamondSport === {easy: true, medium: true, hard: true } && setImgC(diamondArt)  }, [diamondSport,setImgC]);
  gameOver === true && setDiamondSport({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondFood.easy === true &&
      diamondFood.medium === true &&
      diamondFood.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFood({ easy: false, medium: false, hard: false });
  }, [diamondFood]);


  useEffect(() => {
    diamondFood.easy === true && setCircleFood(true)
    diamondFood.medium === true && setCircleFood2(true)
    diamondFood.hard === true && setCircleFood(false)
    diamondFood.hard === true && setCircleFood2(false)
    diamondFood === {easy: true, medium: true, hard: true }  && setImgC(diamondArt)  }, [diamondFood,setImgC]);
  gameOver === true && setDiamondFood({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondFilm.easy === true &&
      diamondFilm.medium === true &&
      diamondFilm.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFilm({ easy: false, medium: false, hard: false });
  }, [diamondFilm]);

  useEffect(() => {
    diamondFilm.easy === true && setCircleFilm(true)
    diamondFilm.medium === true && setCircleFilm2(true)
    diamondFilm.hard === true && setCircleFilm(false)
    diamondFilm === {easy: true, medium: true, hard: true } && setImgC(diamondArt) }, [diamondFilm,setImgC]);

  gameOver === true && setDiamondFilm({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondGen.easy === true &&
      diamondGen.medium === true &&
      diamondGen.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGen({ easy: false, medium: false, hard: false });
  }, [diamondGen]);


  useEffect(() => {
    diamondGen.easy === true && setCircleGen(true)
    diamondGen.medium === true && setCircleGen2(true)
    diamondGen.hard === true && setCircleGen(false)
    diamondGen.hard === true && setCircleGen2(false)
    diamondGen === {easy: true,medium: true,hard: true} && setImgC(diamondArt)


  }, [diamondGen,setImgC,diamondGen.hard]);
  gameOver === true && setDiamondGen({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondMus.easy === true &&
      diamondMus.medium === true &&
      diamondMus.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondMus({ easy: false, medium: false, hard: false });
  }, [diamondMus]);


  useEffect(() => {
    diamondMus.easy === true && setCircleMus(true)
    diamondMus.medium === true && setCircleMus2(true)
    diamondMus.hard === true && setCircleMus(false)
    diamondMus.hard === true && setCircleMus2(false)
   diamondMus === {easy: true, medium: true, hard: true }  && setImgC(diamondArt)  }, [diamondMus,setImgC]);
  gameOver === true && setDiamondMus({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondHist.easy === true &&
      diamondHist.medium === true &&
      diamondHist.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondHist({ easy: false, medium: false, hard: false });
  }, [diamondHist]);


  useEffect(() => {
    diamondHist.easy === true && setCircleHist(true)
    diamondHist.medium === true && setCircleHist2(true)
    diamondHist.hard === true && setCircleHist(false)
    diamondHist.hard === true && setCircleHist2(false)
    diamondHist === {easy: true, medium: true, hard: true } && setImgC(diamondArt)  }, [diamondHist,setImgC]);
  gameOver === true && setDiamondHist({ easy: false, medium: false, hard: false });


  useEffect(() => {
    diamondSci.easy === true &&
      diamondSci.medium === true &&
      diamondSci.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSci({ easy: false, medium: false, hard: false });
  }, [diamondSci]);

  useEffect(() => {
    diamondSci.easy === true && setCircleSci(true)
    diamondSci.medium === true && setCircleSci2(true)
    diamondSci.hard === true && setCircleSci(false)
    diamondSci.hard === true && setCircleSci2(false)
    diamondSci === {easy: true, medium: true, hard: true } && setImgC(diamondArt) }, [diamondSci,setImgC]);

  gameOver === true && setDiamondSci({ easy: false, medium: false, hard: false });

  useEffect(() => {
    diamondSoc.easy === true &&
      diamondSoc.medium === true &&
      diamondSoc.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSoc({ easy: false, medium: false, hard: false });
  }, [diamondSoc]);

  useEffect(() => {
    diamondSoc.easy === true && setCircleSoc(true)
    diamondSoc.medium === true && setCircleSoc2(true)
    diamondSoc.hard === true && setCircleSoc(false)
    diamondSoc.hard === true && setCircleSoc2(false)
    diamondSoc === {easy: true, medium: true, hard: true } && setImgC(diamondArt) }, 
    [diamondSoc,setImgC]);

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

  return (
    <div className="diamondsDiv">
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
