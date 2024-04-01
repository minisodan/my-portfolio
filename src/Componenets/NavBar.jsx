import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1sancvf_dwRP-X40qa5S80kxq0rsVtgcs/view?usp=sharing";
  // return (
  //   <nav class="bg-transparent">
  //     <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //       <Link
  //         className="Brand flex items-center space-x-4 rtl:space-x-reverse"
  //         to="/"
  //       >
  //         <span class="self-center text-xl font-semibold whitespace-nowrap">
  //           Mason Myles
  //         </span>
  //       </Link>
  //       <button
  //         data-collapse-toggle="navbar-default"
  //         type="button"
  //         class="inline-flex items-center p-2 w-10 h-10 justify-center md:bg-trasparent text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //         aria-controls="navbar-default"
  //         aria-expanded="false"
  //       >
  //         <span class="sr-only">Open main menu</span>
  //         <svg
  //           class="w-5 h-5"
  //           aria-hidden="true"
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 17 14"
  //         >
  //           <path
  //             stroke="currentColor"
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M1 1h15M1 7h15M1 13h15"
  //           />
  //         </svg>
  //       </button>
  //       <div class="hidden w-full md:block md:w-auto" id="navbar-default">
  //         <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //           <li className="md:py-4">
  //             <Link
  //               className="my-5 md:p-0 bg-transparent rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
  //               to="/about"
  //               aria-current="page"
  //               style={{ color: "#d99330" }}
  //             >
  //               About
  //             </Link>
  //           </li>
  //           <li className="md:py-4">
  //             <Link
  //               className="my-5 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
  //               to="/portfolio"
  //               aria-current="page"
  //               style={{ color: "#d99330" }}
  //             >
  //               Portfolio
  //             </Link>
  //           </li>
  //           <li className="md:py-4">
  //             <Link
  //               className="my-5 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
  //               to="/contact"
  //               aria-current="page"
  //               style={{ color: "#d99330" }}
  //             >
  //               Contact
  //             </Link>
  //           </li>
  //           <li className="md:py-4">
  //             <a
  //               href={resumeUrl}
  //               className="btn btn-accent btn-outline hover:bg-gray-700 font-bold py-2 px-4 rounded-full"
  //             >
  //               Resume
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"></div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
