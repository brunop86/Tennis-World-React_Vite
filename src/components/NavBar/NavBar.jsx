import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo" height="100px" />
      </Link>
      <div>
        <ul>
          <li>
            <NavLink to={`/category/clothing`}>Clothing</NavLink>
          </li>
          <li>
            <NavLink to={`/category/racquets`}>Racquets</NavLink>
          </li>
          <li>
            <NavLink to={`/category/equipment`}>Equipment</NavLink>
          </li>
          <li>
            <NavLink to={`/category/accessories`}>Accesories</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
