import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <Navbar>
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontSize: 30,
              fontFamily: "Arial",
              color: "#148ebb",
            }}
          >
            My portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/floriane-portfolio/">About me</Nav.Link>
              <Nav.Link href="/floriane-portfolio/projects">Projects</Nav.Link>
              <Nav.Link href="/floriane-portfolio/certifications">
                Certifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
