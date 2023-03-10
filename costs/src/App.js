import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import Projects from "./pages/Projects";

import Container from "./components/Layout";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Project } from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />

        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
