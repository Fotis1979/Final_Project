import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from "../authentication/Form";
import MyContext from "../../context/MyContext";

import ProfileHeader from "./ProfileHeader";
import "../../styling/nav.scss";

const Nav = () => {
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
    gameOver,
    settings,
  } = context;

  return (
    <nav>
      <ul className="nav--ul">
        {(settings === true || gameOver === true) && (
          <NavLink className={"nav--link"} to="/">
            <span>Home</span>
          </NavLink>
        )}
        {(settings === true || gameOver === true) && (
          <NavLink className={"nav--link"} to="/settings">
            <span>Play</span>
          </NavLink>
        )}
        {/* ProfileHeader should become the link to profile */}

        {localStorage.getItem("token") ? (
          <>
            {" "}
            <NavLink className={"nav--link"} to="/profile">
              <span>Profile</span>
            </NavLink>
            <NavLink className={"nav--link"} to="/highScoreBoard">
              <span>Scoreboard</span>
            </NavLink>
            <NavLink className={"nav--link"} to="/shop">
              <span>shop</span>
            </NavLink>
          </>
        ) : (
          //
          ""
        )}
        {/* ProfileHeader should become the link to profile */}
        {/*<NavLink to='/profile'>

					<ProfileHeader />
				</NavLink>*/}
        {/* ProfileHeader props: username, avatarUrl (avatar = profile image that you can unlock and change*/}
        <Form />
      </ul>
    </nav>
  );
};
export default Nav;