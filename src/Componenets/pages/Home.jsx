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
    <div className="min-h-screen flex items-center justify-center p-4 md:p-0">
      <div className="max-w-6xl w-full md:flex justify-center">
        {/* Profile Card */}
        <div
          className="bg-white rounded-lg shadow-md p-8 md:m-4 md:w-1/2"
          style={{ backgroundColor: "#33292f" }}
        >
          <div className="flex items-center justify-center mb-4">
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
        {/* Featured Project Card */}
        <div
          className="rounded-lg shadow-md p-8 md:m-4 md:w-1/2"
          style={{ backgroundColor: "#33292f" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "inherit" }}>
            Featured Project
          </h2>
          {featuredRepo && (
            <div className="text-center">
              <img
                src={featuredRepo.owner.avatar_url} // You can change this to use the actual repo image if available
                alt="Project"
                className="rounded-full h-60 w-60 m-2"
              />
              <h3>{featuredRepo.name}</h3>
              <p style={{ color: "inherit" }}>{featuredRepo.description}</p>
            </div>
          )}
          <div className="mt-8 text-center">
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
      </div>
    </div>
  );
}

export default Home;
