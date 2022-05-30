import "../../../styling/rewards.css";
import Counter from "../question/Counter";
import Hints from "./Hints";
import { useContext, useEffect } from "react";
import MyContext from "../../../context/MyContext";
import diamondGeography from "../../../assets/images/diamondGeography.png";
import diamondArt from "../../../assets/images/diamondArt.png";
import HighScore from "./HighScore";
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
    img,
    setDiamonds,
    diamonds,
  } = context;
  useEffect(() => {
    diamondGeo.easy === true &&
      diamondGeo.medium === true &&
      diamondGeo.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGeo({ easy: false, medium: false, hard: false });
  }, [diamondGeo]);
  useEffect(() => {
    diamondArts.easy === true &&
      diamondArts.medium === true &&
      diamondArts.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondArts({ easy: false, medium: false, hard: false });
  }, [diamondArts]);
  useEffect(() => {
    diamondSport.easy === true &&
      diamondSport.medium === true &&
      diamondSport.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSport({ easy: false, medium: false, hard: false });
  }, [diamondSport]);
  useEffect(() => {
    diamondFood.easy === true &&
      diamondFood.medium === true &&
      diamondFood.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFood({ easy: false, medium: false, hard: false });
  }, [diamondFood]);
  useEffect(() => {
    diamondFilm.easy === true &&
      diamondFilm.medium === true &&
      diamondFilm.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondFilm({ easy: false, medium: false, hard: false });
  }, [diamondFilm]);
  useEffect(() => {
    diamondGen.easy === true &&
      diamondGen.medium === true &&
      diamondGen.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondGen({ easy: false, medium: false, hard: false });
  }, [diamondGen]);
  useEffect(() => {
    diamondMus.easy === true &&
      diamondMus.medium === true &&
      diamondMus.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondMus({ easy: false, medium: false, hard: false });
  }, [diamondMus]);
  useEffect(() => {
    diamondHist.easy === true &&
      diamondHist.medium === true &&
      diamondHist.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondHist({ easy: false, medium: false, hard: false });
  }, [diamondHist]);
  useEffect(() => {
    diamondSci.easy === true &&
      diamondSci.medium === true &&
      diamondSci.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSci({ easy: false, medium: false, hard: false });
  }, [diamondSci]);
  useEffect(() => {
    diamondSoc.easy === true &&
      diamondSoc.medium === true &&
      diamondSoc.hard === true &&
      setDiamonds((prev) => prev + 1) &&
      setDiamondSoc({ easy: false, medium: false, hard: false });
  }, [diamondSoc]);
  useEffect(() => {
    (diamonds === 1 ||
      diamonds === 2 ||
      diamonds === 3 ||
      diamonds === 4 ||
      diamonds === 5 ||
      diamonds === 6) &&
      setScore(score + 50);
  }, [diamonds]);
  return (
    <div className="Diamonds--section">
      {diamondGeo.easy === true &&
        diamondGeo.medium === true &&
        diamondGeo.hard === true &&
        !img && (
          <img
            className="diamondArt"
            src={diamondArt}
            alt="Diamond_geography"
          />
        )}
      {diamondArts.easy === true &&
        diamondArts.medium === true &&
        diamondArts.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_art" />
        )}
      {diamondSport.easy === true &&
        diamondSport.medium === true &&
        diamondSport.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_sports" />
        )}
      {diamondFood.easy === true &&
        diamondFood.medium === true &&
        diamondFood.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_food" />
        )}
      {diamondFilm.easy === true &&
        diamondFilm.medium === true &&
        diamondFilm.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_film" />
        )}
      {diamondGen.easy === true &&
        diamondGen.medium === true &&
        diamondGen.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_gen" />
        )}
      {diamondMus.easy === true &&
        diamondMus.medium === true &&
        diamondMus.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_music" />
        )}
      {diamondHist.easy === true &&
        diamondHist.medium === true &&
        diamondHist.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_history" />
        )}
      {diamondSci.easy === true &&
        diamondSci.medium === true &&
        diamondSci.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_science" />
        )}
      {diamondSoc.easy === true &&
        diamondSoc.medium === true &&
        diamondSoc.hard === true &&
        !img && (
          <img className="diamondArt" src={diamondArt} alt="Diamond_social" />
        )}
    </div>
  );
};
export default Diamonds;
