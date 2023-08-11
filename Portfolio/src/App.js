import './App.css';
import React from "react";
import About from "./Components/About";
import Introduction from "./Components/Introduction";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Interests from "./Components/Interests";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>

      <BrowserRouter className="page">

        <Navbar />
        <div className="page-content" style={{ height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/About" element={<About />} />
            <Route path="/Interests" element={<Interests />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

        </div>
        {/* <footer>
          <p>
            © Copyrighted
          </p>
         </footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
