import * as React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="~bth645_221a16">Harsh Keswani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="~bth645_221a16">
              Home
            </Nav.Link>
            <NavDropdown title="Labs" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="~bth645_221a16/lab/1">
                Lab 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/lab/2">
                Lab 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/lab/3">
                Lab 3
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/lab/4">
                Lab 4
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/lab/5">
                Lab 5
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Assignments" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="~bth645_221a16/assignment/1">
                Assignment 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/assignment/2">
                Assignment 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="~bth645_221a16/assignment/3">
                Assignment 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="~bth645_221a16/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
