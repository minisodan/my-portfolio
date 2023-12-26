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
        <br></br>
          <ul className='users'>
            {repos.map((user) => {
              const { id, name, html_url, language, owner } = user;
              return (
                <li key={id}>
                  <div className="gitHubContent">
                  <img src={`${owner.avatar_url}`} alt="AvatarPFP"/>
                    <h4>Project Name: {name}</h4>
                    <p>Language Used: {language}</p>
                    <br></br>
                    <br></br>
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