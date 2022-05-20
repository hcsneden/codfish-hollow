import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="logo d-inline-block align-top go"
          />{" "}
          Codfish Hollow
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#features">Tickets</Nav.Link>
          <Nav.Link href="#pricing">Store</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">FAQ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
