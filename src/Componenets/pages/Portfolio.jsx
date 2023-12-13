import { useEffect, useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [repo, setRepo] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/minisodan/repos", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRepo(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="parent">
      <h1>!Currently Under Construction!</h1>
    </div>
  );
}
export default Portfolio;
