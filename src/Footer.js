import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Footer(props) {
  return (
    <Navbar className="footer" bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          This page was last modified on {props.datetime}
        </Nav>
      </Container>
    </Navbar>
  );
}
