import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Componenets/NavBar";
import Home from "./Componenets/pages/Home";
import About from "./Componenets/pages/About";
import Portfolio from "./Componenets/pages/Portfolio";
import Contact from "./Componenets/pages/Contact";
import Footer from "./Componenets/pages/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
