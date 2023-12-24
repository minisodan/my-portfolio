import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles/Footer.css";

function Footer() {
  return (
    <>
    <div className="footer">
      <footer className="Footer">
        <div className="icons">
          <ul>
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
      </footer>
    </div>
    </>
  );
}

export default Footer;
