import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const context = useContext(MyContext);
  const {
    email,
    setEmail,
    pass,
    setPass,
    name,
    setName,
    avatarFile,
    setAvatarFile,
    birthDate,
    setBirthDate,
    isProfileSaved,
    setIsProfileSaved,
    loginMsg,
    setLoginMsg,
  } = context;

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

          setName(result.data.name);
          setBirthDate(result.data.birthDate);
        });
    }
  }, [isProfileSaved]);

  const inputHandler = (e) => {
    //console.log(e);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "birthDate":
        setBirthDate(e.target.value);
        break;

      default:
        console.error(`There's a problem. Please check the event listener.`);
        break;
    }
  };
  console.log(name);
  console.log(birthDate);

  const saveHandler = () => {
    // const formData = new FormData();
    // //formData.append("avatarFile", avatarFile);
    // formData.append("name", name);
    // formData.append("birthDate", birthDate);

    // console.log(formData);

    const url = "http://localhost:8080/profile/save";
    const options = {
      // method: "POST",
      // headers: {
      //   "x-auth-token": localStorage.getItem("token"),
      // },
      // body: formData,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, birthDate }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        setIsProfileSaved(true);
        alert(result);
      });
  };

  //   const fileHandler = (e) => {
  //     setAvatarFile(e.target.files[0]);
  //   };

  return (
    <div className="flex-col">
      {loginMsg !== "" ? (
        loginMsg
      ) : (
        <section className="flex-col">
          <h1>Profile</h1>
          {/* <img className = 'avatar' src={avatarUrl} /> */}
          {/* <input id="uploader" type="file" onChange={fileHandler} /> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="birthDate"
            placeholder="Birth date"
            value={birthDate}
            onChange={inputHandler}
          />

          <button onClick={saveHandler}>Save</button>
        </section>
      )}
    </div>
  );
};

export default Profile;
