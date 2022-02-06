import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Guidelines from "./Guidelines";
import Header from "./Header";
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
          <Route path="/~bth645_221a16/" element={<Home />} />
          <Route path="/" element={<Navigate to="/~bth645_221a16/" />} />
          <Route path="/~bth645_221a16/lab/:id" element={<Lab />} />
          <Route
            path="/~bth645_221a16/assignment/:id"
            element={<Assignment />}
          />
          <Route path="/~bth645_221a16/guidelines" element={<Guidelines />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
