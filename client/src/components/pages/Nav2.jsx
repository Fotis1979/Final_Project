import { NavLink } from "react-router-dom";
import "../../styling/nav.css";
import Form from "../authentication/Form";
import MyContext from "../../context/MyContext";
import { useContext } from "react";

const Nav = () => {
  const context = useContext(MyContext);
  const {
   score,
   email,

   indexCounter
  } = context;
  // console.log(indexCounter);
  return (
    <nav>
      <p className="email">User: {email}</p> 

        {/* <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/settings">
          <li>Settings</li>
        </NavLink> */}
      
    </nav>
  );
};
export default Nav;
