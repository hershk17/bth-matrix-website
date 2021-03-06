import * as React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Harsh Keswani
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Labs" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="lab/1">
                  Lab 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lab/2">
                  Lab 2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lab/3">
                  Lab 3
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lab/4">
                  Lab 4
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lab/5">
                  Lab 5
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Assignments" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="assignment/1">
                  Assignment 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="assignment/2">
                  Assignment 2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="assignment/3">
                  Assignment 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="guidelines">
                Guidelines
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <br />
      <br />
    </div>
  );
};
export default Header;
