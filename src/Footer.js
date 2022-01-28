import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar className="footer" bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          This page was last modified on 27/01/2022, 05:37:11 PM
        </Nav>
      </Container>
    </Navbar>
  );
}
