import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles/Footer.css";

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="icons">
          <ul className="flex items-center">
            <li>
              <a href="https://www.linkedin.com/in/masonmyles/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a href="https://github.com/minisodan">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
    </div>
    </>
  );
}

export default Footer;
