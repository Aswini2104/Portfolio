import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Home from "./Components/Home";
import Certification from "./Components/Certification";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/Portfolio" element={<Portfolio />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;