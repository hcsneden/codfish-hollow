import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';

const History = () => {
    return (
        <Container>
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">About</Breadcrumb.Item>
                <Breadcrumb.Item active>History</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col md={6}>
                    <img className='about-image' src={require("../images/codfish hollow from above.jpg")}
                        alt="View of the land from above"
                    />
                </Col>
                <Col className='about-col' md={6}>
                    <img src={require("../images/logo.png")} />
                    <h1>Our Story</h1>
                    <p className="about-text">A farm that has been in the family for over 120 years has become a place for art, music and community. We are a family.
                    </p>
                    <h3>Learn a little more about our history below!</h3>
                </Col>
            </Row>
            <div className='first-show'>
            <Row>
                <Col className='about-col' md={6}>
                    <h2 className='first-show-heading'>Our First Show</h2>
                    <p className='first-show-text'>We had our very first barn concert on July 25th 2009 with Caleb Engstrom, Catfish Haven and The Local Natives, presented by Daytotter.com.

                        This is what the barn looked like just 10 days before that first concert. Since then we have renovated the barn to include a stage, merch area, new wiring
                        for the electric needed to properly rock the barn, new lighting and most recently a green room for the bands. We have turned the old farmhouse into a makeshift art
                        gallery and continue to make improvements with every show. Since July of 2009 we have hosted over 400 musicians/bands and 150 shows including John C. Reilly, Counting
                        Crows and Norah Jones, bringing more than one hundred and thirty bands to this unique venue in beautiful rural eastern Iowa. </p>
                </Col>
                <Col md={6}>
                    <img className='welcome-image' src={require("../images/our first show.PNG")}
                        alt="Image of codfish hollow land from above"
                    />
                </Col>
            </Row>
            </div>
        </Container>
    )
}

export default History;