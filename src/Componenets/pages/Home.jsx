import "./Styles/Home.css";

function Home() {
  return (
    <div className="homeParent rounded-lg shadow">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full justify-center gap-2 items-center p-16 min-h-screen place-items-center">
        <div className="image w-96 h-96 overflow-hidden rounded-full">
          <img src="picture/Mason.jpeg" alt="image" />
        </div>
        <div className="text-center">
          <div>
            <h2>Mason Myles</h2>
            <h1>Backend Software Engineer</h1>
          </div>
          <div className="skills">
            <h3>Current Skills</h3>
            <ul className="list">
              <li>React</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
            <ul>
              <li>SQL</li>
              <li>LINQ</li>
              <li>.NET</li>
              <li>SpringBoot</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
