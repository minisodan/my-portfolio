import "./Styles/Home.css";
import "../../picture/Mason.jpeg";
function Home() {
  return (
    <div className="homeParent">
      <h2>Welcome to my website</h2>
      <div className="child">
        <h1>Software Engineer</h1>
        <div className="skills">
          <h3>Current Skills</h3>
          <ul className="list">
            <li>- React</li>
            <li>- HTML5</li>
            <li>- CSS</li>
            <li>- JavaScript</li>
            <li>- Java</li>
          </ul>
        </div>
      </div>

      <div className="immage">
        <img src="picture/Mason.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Home;
