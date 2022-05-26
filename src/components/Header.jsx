import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="nav-bar" scrolling dark expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../images/logo.png")}
            width="30"
            height="30"
            className="logo d-inline-block align-top go"
          />{" "}
          <div className="home-text">Codfish Hollow</div>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link className="nav-item" href="#features">About</Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">Shows</Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">Store</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
