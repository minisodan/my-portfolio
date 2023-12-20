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


  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {repos.map((user) => {
          const { id, name, html_url } = user;
          return (
            <li key={id}>
              <div>
                <h4>{name}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Portfolio;