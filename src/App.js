import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Assignment from "./Assignment";
import Lab from "./Lab";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <br />
      <Container>
        <Routes>
          <Route path="~bth645_221a16/" element={<Home />} />
          <Route path="~bth645_221a16/lab/:id" element={<Lab />} />
          <Route path="~bth645_221a16/assignment/:id" element={<Assignment />} />
          <Route path="~bth645_221a16/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
