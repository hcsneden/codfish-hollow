import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col md={2}>
          <img
            alt="Codfish Hollow Logo"
            className="footer-logo"
            src={require("../images/logo.jpg")}
          />
        </Col>
        <Col md={3} align="center">
          <p className="footer-address">
            BARN Address 5013 288th Ave, Maquoketa, IA 52060 
            <br/>
            MAILING Address
            3437 288th Ave, Maquoketa, IA 52060
          </p>
        </Col>
        <Col md={4}></Col>
        <Col md={2}>
          <a href="https://www.facebook.com/Codfish.Hollow/">
            <img
              alt="facebook logo"
              className="social"
              src={require("../images/fb.png")}
            />
          </a>
          <a href="https://www.instagram.com/explore/locations/972378/?hl=en">
          <img
            alt="instagram logo"
            className="social"
            src={require("../images/instagram.png")}
          />
          </a>
          <a href="https://www.twitter.com/Codfish_Hollow/">
            <img
              alt="twitter logo"
              className="social"
              src={require("../images/twitter.png")}
            />
          </a>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
