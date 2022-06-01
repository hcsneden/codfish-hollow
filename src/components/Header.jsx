import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function onAboutClick() {
    navigate("/about");
  }

  function onFAQClick() {
    navigate("/faq");
  }
  function onUpcomingShowsClick() {
    navigate("/shows");
  }

  function onHomeClick() {
    navigate("/");
  }

  return (
    <Navbar className="nav-bar" expand="md" fixed="top">
      <Container>
        <Navbar.Brand onClick={onHomeClick}>
          <img
            alt=""
            src={require("../images/logo.png")}
            width="30"
            height="30"
            className="logo d-inline-block align-top go"
          />{" "}
          <div className="home-text">Codfish Hollow</div>
        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="justify-content-end">
        <NavDropdown className="nav-item" title="About" id="about-dropdown">
            <NavDropdown.Item eventKey="4.1" onClick={onAboutClick}>About Us</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" onClick={onFAQClick}>FAQ</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Covid-19
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">
              Contact
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="nav-item" title="Shows">
          <NavDropdown.Item eventKey="4.2" onClick={onUpcomingShowsClick}>Upcoming Shows</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Testimonials</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="nav-item" href="#pricing">
            Store
          </Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
