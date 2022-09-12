import "./Styles/Contact.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const twitter = <FontAwesomeIcon icon="fa-brands fa-twitter" />;
  return (
    <div className="parent">
      <h1>Connect with me</h1>
      <p className="child">
        I am currently looking for opportunities as a current University
        Student. I would prefer a job as a web developer. but honestly, any
        oppurtunity is a good one and I will not restrict myself to certain
        endeavors.
      </p>

      <div className="contact button">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100010409719044">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a
            className="btn btn-accent btn-outline btn-med"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/masonmyles/"
          >
            {" "}
            Instagram
          </a>
        </li>
      </div>
    </div>
  );
}

export default Contact;
