import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container >
        <Row>
          <Col md={2}>
            <img
              alt="Codfish Hollow Logo"
              className="footer-logo"
              src={require("../images/barn-logo.jpg")}
            />
          </Col>
          <Col md={2}>
            <p className="footer-address">
              BARN Address 5013 288th Ave, Maquoketa, IA 52060 MAILING Address
              3437 288th Ave, Maquoketa, IA 52060
            </p>
          </Col>
          <Col md={2}>
          </Col>
          <Col md={4}>
          <a href="facebook.com"><img alt="facebook logo" className="social" src={require("../images/fb.png")}/></a>
          <img alt="instagram logo" className="social" src={require("../images/instagram.png")}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
