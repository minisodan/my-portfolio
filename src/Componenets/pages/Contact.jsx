import React, { useState } from "react";
import "./Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { background } from "@chakra-ui/react";

function Contact() {
  const [emailContent, setEmailContent] = useState("");
  const [subjectContent, setSubjectContent] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleInputChange = (e, setContent) => {
    setContent(e.target.value);
  };

  return (
    <>
      <h3 className="mt-4 text-center">Contact Me</h3>
      <div className="flex justify-center">
        <div
          className="shadow-lg rounded-lg p-8 my-20 mx-4 sm:mx-auto sm:max-w-xl"
          style={{ backgroundColor: "#33292f" }}
        >
          <h1 className="text-center text-2xl sm:text-4xl mb-8">
            Feel free to connect with me!
          </h1>
          <div className="contact">
            <form
              action="mailto:mylesmasonn@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label className="text-xl sm:text-2xl block">
                <span className="label-text">Your Email:</span>
                <input
                  type="email"
                  name="email"
                  className={`block w-full border-gray-300 rounded-md mt-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
                    emailContent ? "text-black" : ""
                  }`}
                  onChange={(e) => handleInputChange(e, setEmailContent)}
                  required
                />
              </label>
              <br />
              <label className="text-xl sm:text-2xl block mt-4">
                <span className="label-text">Subject:</span>
                <input
                  type="text"
                  name="subject"
                  className={`block w-full border-gray-300 rounded-md mt-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
                    subjectContent ? "text-black" : ""
                  }`}
                  onChange={(e) => handleInputChange(e, setSubjectContent)}
                  required
                />
              </label>
              <br />
              <label className="text-xl sm:text-2xl block mt-4">
                <span className="label-text">Message:</span>
                <textarea
                  name="message"
                  rows="4"
                  className={`block w-full border-gray-300 rounded-md mt-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
                    messageContent ? "text-black" : ""
                  }`}
                  onChange={(e) => handleInputChange(e, setMessageContent)}
                  required
                />
              </label>
              <br />
              <button
                type="submit"
                className="text-xl sm:text-2xl bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                style={{ backgroundColor: "#d99330" }}
              >
                Send Email <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </form>
            <ul className="flex items-center space-x-4 mt-8">
              <li>
                <a
                  className="text-2xl sm:text-4xl"
                  href="mailto:mylesmasonn@gmail.com?subject=Subject Text"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
