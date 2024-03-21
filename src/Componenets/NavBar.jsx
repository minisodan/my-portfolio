import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1sancvf_dwRP-X40qa5S80kxq0rsVtgcs/view?usp=sharing";
  return (
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          className="Brand flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Mason Myles
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-transparent rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className="py-4">
              <Link
                className="my-5 md:p-0 bg-transparent rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                to="/about"
                aria-current="page"
                style={{ color: "#d99330" }}
              >
                About
              </Link>
            </li>
            <li className="py-4">
              <Link
                className="my-5 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                to="/portfolio"
                aria-current="page"
                style={{ color: "#d99330" }}
              >
                Portfolio
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="my-5 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                to="/contact"
                aria-current="page"
                style={{ color: "#d99330" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href={resumeUrl}
                className="btn btn-accent btn-outline hover:bg-gray-700 font-bold py-2 px-4 rounded-full"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
