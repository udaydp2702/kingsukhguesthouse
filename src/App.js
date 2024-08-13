import React from "react";
// import { BrowserRouter , Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Rooms from "./Rooms";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <NavBar />
      <Home />
      <About />
      <Services />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
