import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import { Link } from "react-router-dom";
import "./highScoreBoard.css";

const HighScoreBoard = () => {
  //TODO: display users highScore and users Avatar
  //from dataBase
  //let user sees all users highScores and avatars

  const context = useContext(MyContext);
  const {
    hints,
    highScore,
    email,
    setEmail,
    pass,
    setPass,
    userName,
    setUserName,
    avatarUrl,
    setAvatarUrl,
    avatarFile,
    setAvatarFile,
    birthDate,
    setBirthDate,
    isProfileSaved,
    setIsProfileSaved,
    setHighScoreResult,
    highScoreResult,
    loginMsg,
    setLoginMsg,
  } = context;

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginMsg(
        <p className="fullScreenText">
          You should <Link to={"/form"}>login</Link> to see your profile!
        </p>
      );
    } else {
      fetch("http://localhost:8080/rewards/get", {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(123, result);

          setHighScoreResult(result.data.highScoreResult);
        });
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginMsg(
        <p className="fullScreenText">
          You should <Link to={"/form"}>login</Link> to see your profile!
        </p>
      );
    } else {
      fetch("http://localhost:8080/profile/get", {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(123, result);
          setAvatarUrl(result.data.avatarUrl);
          setUserName(result.data.userName);
          setBirthDate(result.data.birthDate);
        });
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginMsg(
        <p className="fullScreenText">
          You should <Link to={"/form"}>login</Link> to see your profile!
        </p>
      );
    } else {
      fetch("http://localhost:8080/collection/get", {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result length", result.data[0].hints);
          setCollection(result.data);
          console.log("collection is", collection);
        });
    }
  }, []);

  return (
    <div>
      <div>
        {highScoreResult}
        {userName}
      </div>
      <div className="collection-display">
        {collection.map((el) => el.highScoreResult)}
      </div>
      {/* <div>{collection.map((el, index) => el.hints)}</div> */}
    </div>
  );
};

export default HighScoreBoard;
