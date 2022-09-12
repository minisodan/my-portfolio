import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="icons">
        <a href="https://github.com/minisodan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
