import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [featuredRepo, setFeaturedRepo] = useState(null);

  useEffect(() => {
    const fetchRandomRepo = async () => {
      const response = await fetch(
        "https://api.github.com/users/minisodan/repos"
      );
      const repos = await response.json();
      const randomIndex = Math.floor(Math.random() * repos.length);
      setFeaturedRepo(repos[randomIndex]);
    };

    fetchRandomRepo();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 ml-8 mt-4 md:p-0">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center md:space-x-8">
        <div
          className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#33292f",
            width: "90%",
            marginBottom: "2rem",
            maxWidth: "34.545rem",
          }}
        >
          <div className="mb-4">
            <img
              src="/picture/Mason.jpeg"
              alt="Mason Myles"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">Mason Myles</h1>
            <h2 className="text-xl font-bold mt-2">
              Backend Software Engineer
            </h2>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold mb-2">Current Skills</h3>
            <ul className="grid grid-cols-2 gap-4">
              {[
                "React",
                "HTML5",
                "CSS",
                "JavaScript",
                "Java",
                "C#",
                "SQL",
                "LINQ",
                ".NET",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link to="/portfolio">
              <button
                className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                style={{ backgroundColor: "#d99330" }}
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#33292f",
            width: "90%",
            marginBottom: "2rem",
            maxWidth: "34.545rem",
            padding: "2rem",
          }}
        >
          {featuredRepo && (
            <div className="text-center">
              <img
                src={featuredRepo.owner.avatar_url}
                alt="Project"
                className="rounded-full h-60 w-60 m-3"
                style={{ margin: "auto" }}
              />
              <h2
                className="text-2xl font-bold m-4"
                style={{ color: "inherit" }}
              >
                {featuredRepo.name
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
              <p
                style={{
                  color: "inherit",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                {featuredRepo.description}
              </p>
              <div className="mt-auto">
                <a
                  href={featuredRepo && featuredRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    style={{ backgroundColor: "#d99330" }}
                  >
                    Explore Project
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
