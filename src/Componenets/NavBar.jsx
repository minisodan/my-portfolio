import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
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
            <Link to="/" className="btn btn-accent btn-outline btn-med">
              Resume
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
