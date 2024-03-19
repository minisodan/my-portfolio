import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1sancvf_dwRP-X40qa5S80kxq0rsVtgcs/view?usp=sharing";
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
            <a
              href={resumeUrl}
              className="btn btn-accent btn-outline hover:bg-gray-700 font-bold py-2 px-4 rounded-full"
            >
              Resume
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
