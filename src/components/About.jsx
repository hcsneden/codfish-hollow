import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img className='about-image' src={require("../images/barn at night.PNG")}
            alt="About"
          />
        </Col>
        <Col md={6}><h1>About Us</h1>
          <h2>What exactly do we do?</h2>
          <p className="about-text">Live music in a barn in the Hollow. We host live local and national indie bands in our barn.  Food vendors and alcoholic and non-alcoholic beverages available for purchase. Art gallery and vendors. Camping available.

            Bring your kids! Bring your grandparents! Bring your lawn chairs. (for outdoor seating only) Bring a blanket.
          </p>
          <Button variant="light">Our History</Button>
        </Col>
      </Row>
      <Row className='about-row'>
        <Col><h2>What To Expect When You Visit Us</h2></Col>
        <p>Welcome to Codfish Hollow! Park in our cow pasture, then its just a short walk or haybail ride to the barn and the fun! </p>
        <Col md={6}>
          <img className='welcome-image' src={require("../images/codfish hollow from above.jpg")}
            alt="Image of codfish hollow land from above"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img className='camp-image' src={require("../images/starryImg.png")}
            alt="Starry sky over barn"
          />
        </Col>
        <Col md={6}>
          <h2>Camping the night of the Show</h2>
          <p className="camp-text">Camp with us for free the night of the show!
            Set your tent up or park your vehicle in our cow pasture and sleep under the stars....
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img className='festival-image' src={require("../images/image2.jpeg")}
            alt="Picture of people in the grass"
          />
        </Col>
        <Col md={6}>
          <h2>Food and Beverage</h2>
          <p className="food-text">Enjoy local brews, alcoholic and non for purchase - cash only and ATM at barn!
            We also have a food truck on site... sometimes two!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img className='barn-image' src={require("../images/barn at night.PNG")}
            alt="Picture of barn at night with people outside"
          />
        </Col>
        <Col md={6}>
          <h2>Community</h2>
          <p className="community-text">Come for the music,
            stay for the community in Maquoketa, Iowa
          </p>
        </Col>
      </Row>
    </Container>






  )
}

export default About;
