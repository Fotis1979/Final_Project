import { NavLink } from "react-router-dom";
import "../../styling/nav.css";
import Form from "../authentication/Form";
const Nav = () => {
  return (
    <nav>
      <ul className="ul-header">
        <Form />
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="settings">
          <li>Settings</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Nav;
