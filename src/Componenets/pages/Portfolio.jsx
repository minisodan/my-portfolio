import { useEffect, useState } from "react";
import "./Styles/Portfolio.css";

const Portfolio = () => {
  const [repos, setRepo] = useState([]);

  const fetchRepos = async() => {
    const response = await fetch("https://api.github.com/users/minisodan/repos");
    const repos = await response.json();
    setRepo(repos);
    console.log(repos)
  }
  useEffect(() => {
    fetchRepos();
  }, []);


  /** make new branch */
  return (
    <>
    <div className="repoCards">
      <div className="repoCard">
        <h3>Projects</h3>
          <ul className='users'>
            {repos.map((user) => {
              const { id, name, html_url, language, avatar_url } = user;
              return (
                <li key={id}>
                  <div>
                    <h4>{name}</h4>
                    <img src= {avatar_url}/>
                    <p>Language Used: {language}</p>
                    <a href={html_url}>Link to Repo</a>
                  </div>
                </li>
              )})}
          </ul>
      </div>
    </div>
  </>
  );
}
export default Portfolio;