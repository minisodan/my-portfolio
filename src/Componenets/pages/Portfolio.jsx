import { useEffect, useState } from "react";
import "./Styles/Portfolio.css";

const Portfolio = () => {
  const [repos, setRepo] = useState([]);

  const fetchRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/minisodan/repos"
    );
    const repos = await response.json();
    setRepo(repos);
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="">
      <h3 className="m-4 text-center">Projects</h3>
      <div
        className="repoCards flex flex-wrap justify-center "
        style={{ margin: "-10px" }}
      >
        {repos.map((user) => {
          const { id, name, html_url, language, owner, description } = user;
          return (
            <div
              key={id}
              className="m-4 max-w-md rounded-xl overflow-hidden shadow-md bg-gray-800"
              style={{
                backgroundColor: "#33292f",
                width: "300px",
                margin: "9px",
              }}
            >
              <a
                href={html_url}
                className="block w-full h-full border border-gray-800 rounded-lg p-4 transition duration-200 hover:bg-gray-800"
              >
                <div className="flex items-center">
                  <img
                    src={`${owner.avatar_url}`}
                    alt="Avatar jpeg"
                    className="rounded-full h-10 w-10"
                  />
                  <p className="ml-3 text-white">
                    <span className="font-semibold">{name}/</span>
                    <span className="font-semibold">{language}</span>
                  </p>
                </div>
                <p className="text-xs text-zinc-200 mt-2 px-2">{description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
