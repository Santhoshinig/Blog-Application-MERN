import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__sociallink"
        >
          <FontAwesomeIcon className="footer__socialicons" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__sociallink"
        >
          <FontAwesomeIcon className="footer__socialicons" icon={faLinkedin} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__sociallink"
        >
          <FontAwesomeIcon className="footer__socialicons" icon={faGithub} />
        </a>
      </div>
      <ul className="footer__list">
        <li>
          <Link to="/home" className="footer__items">
            Home
          </Link>
        </li>
        <li>
          <Link to="/write" className="footer__items">
            Write
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="footer__items">
            About
          </Link>
        </li>
      </ul>
      <p className="footer__copyright">copyright &#169; Neutronzz</p>
    </footer>
  );
};

export default Footer;
