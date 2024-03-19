import "./Styles/Contact.css";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const twitter = <FontAwesomeIcon icon="fa-brands fa-twitter" />;
  return (
    <div className="parent">
      <h1>Feel free to connect with me!</h1>

      <div className="contact button">
        <li>
          <a
            className="fa-2xl"
            href="mailto: mylesmasonn@gmail.com? subject=subject Text"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Contact;
