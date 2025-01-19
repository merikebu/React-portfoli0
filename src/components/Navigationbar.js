import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary w-100 fixed-top z-1 data-bs-theme='dark'">
      <Container>
        <Navbar.Brand href="#" className="fs-4  text-light" >BRIAN<span className="text-info">DEV</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end ">
            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#About">About</Nav.Link>
            <Nav.Link className="text-light" href="#Project">Project</Nav.Link>
            <Nav.Link className="text-light" href="#Contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
