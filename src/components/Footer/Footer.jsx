import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container-social-media">
        <Link to={"https://www.facebook.com/"} target="_blank">
          <img className="img-logo" src={facebook} alt="logo facebook" />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <img className="img-logo" src={instagram} alt="logo instagram" />
        </Link>
        <Link to={"https://twitter.com/"} target="_blank">
          <img className="img-logo" src={twitter} alt="logo twitter" />
        </Link>
      </div>
      <div className="container-footer">
        <h5>COPYRIGHT® All Rights Reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
