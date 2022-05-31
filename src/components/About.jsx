import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <Container className='about-container'>
      <Row>
        <Col md={6}>
          <img className='about-image' src={require("../images/barn at night.PNG")}
            alt="About"
          />
        </Col>
        <Col className='about-col' md={6}>
          <h1>About Us</h1>
          <h2>What exactly do we do?</h2>
          <p className="about-text">Live music in a barn in the Hollow. We host live local and national indie bands in our barn.  Food vendors and alcoholic and non-alcoholic beverages available for purchase. Art gallery and vendors. Camping available.

            Bring your kids! Bring your grandparents! Bring your lawn chairs. (for outdoor seating only) Bring a blanket.
          </p>
          <Button variant="primary">Our History</Button>
        </Col>
      </Row>
      <Row className='about-row'>
        <Col className='about-col' md={6}>
          <h2>What To Expect When You Visit Us</h2>
          <p>Welcome to Codfish Hollow! Park in our cow pasture, then its just a short walk or haybail ride to the barn and the fun! </p>
          <Button variant="secondary">More Information</Button>
        </Col>
        <Col md={6}>
          <img className='welcome-image' src={require("../images/image of above the barn.jpg")}
            alt="Image of codfish hollow land from above"
          />
        </Col>
      </Row>
      <Row className='about-row'>
        <Col md={6}>
          <img className='camp-image' src={require("../images/starryImg.png")}
            alt="Starry sky over barn"
          />
        </Col>
        <Col className='about-col' md={6}>
          <h3>Camping the night of the Show</h3>
          <p className="camp-text">If you like, you can camp with us for free the night of the show!
            Set your tent up or park your vehicle in our cow pasture and sleep under the stars....
          </p>
          <Button variant="secondary">More Information</Button>
        </Col>
      </Row>
      <Row className='about-row'>
        <Col className='about-col' md={6}>
          <h3>Food and Beverage</h3>
          <p className="food-text">Enjoy local brews, alcoholic and non for purchase - cash only and ATM at barn!
            We also have a food truck on site... sometimes two!
          </p>
          <Button variant="secondary">More Information</Button>
        </Col>
        <Col md={6}>
          <img className='vendor-image' src={require("../images/outdoor vendor.jpg")}
            alt="Picture of people outside and vendor in the background"
          />
        </Col>
      </Row>
      <Row className='about-row'>
        <Col className='about-col' md={6}>
          <img className='people-outside-image' src={require("../images/image2.jpeg")}
            alt="Picture of barn at night with people outside"
          />
        </Col>
        <Col className='about-col' md={6}>
          <h3>Community</h3>
          <p className="community-text">Come for the music,
            stay for the community in Maquoketa, Iowa!
          </p>
        </Col>
      </Row>
    </Container>

  )
}

export default About;
