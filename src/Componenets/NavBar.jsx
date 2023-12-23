import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const resumeUrl = "https://docs.google.com/document/d/e/2PACX-1vTbqCWjtAJq6kojDO9fGng206v4jc-2Za9agOSDsc0P9lHG7PoxIxla7r9XULOgKPcPbRBsFe_4HNiV/pub";
  return (
    <nav className="nav">
      <div className="Brand">
        <Link to="/">Mason Myles</Link>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
        <div className="button">
          <li>
            <a href={resumeUrl} className="btn btn-accent btn-outline btn-med">
              Resume
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
