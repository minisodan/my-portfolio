import { useState, useEffect } from "react";
import "./Portfolio.css";
import axios from 'axios';

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const axios = require('axios');

  useEffect(() => {
    axios.get('https://api.github.com/users/minisodan/repos', {
      Authorization: `Client-ID `,
    })
    .then((responceData) => {
      const repo = responceData.data;
      console.log(repo);

    })
  }, []);


  return (
    <div className="parent">
      <div className="repos">
      {repos}
      </div>
    </div>
  );
}

export default Portfolio;
