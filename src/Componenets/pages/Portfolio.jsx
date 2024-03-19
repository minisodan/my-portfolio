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

  /** make new branch */
  return (
    <>
      <h3>Projects</h3>
      <div className="repoCards flex ">
        <div className="repoCard m-5">
          <ul className="users grid grid-cols-4 gap-4 ">
            {repos.map((user) => {
              const { id, name, html_url, language, owner } = user;
              return (
                <li key={id}>
                  <div className="flex items-center max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center">
                    <a
                      href={html_url}
                      className="w-fit border rounded-lg border-gray-900 p-5 shadow hover:bg-gray-700 delay-100 duration-200"
                    >
                      <div className="flex flex-row">
                        <img
                          src={`${owner.avatar_url}`}
                          alt="Avatar jpeg"
                          className="rounded"
                        />
                        <p className="ml-3">
                          <span className="text-zinc-200 font-semibold">
                            {name}/
                          </span>
                          <span className="text-zinc-200 font-semibold">
                            {language}
                          </span>
                        </p>
                      </div>
                      <p className="text-xs text-zinc-200 mt-3">
                        A declarative, efficient, and flexible JS library for
                        building user...
                      </p>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
