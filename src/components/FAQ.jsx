import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";


const FAQ = () => {
    return (
        <div>
            <img
                className="faq-hero-image"
                src={require("../images/image1.png")}
                alt="First slide"
            />
            <div className="faq-banner">
                <h1>FAQ</h1>
            </div>


            <Container className="faq-container">
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img className="faq-card" variant="top" src={require("../images/concessions.PNG")} />
                            <ListGroup variant="flush">
                                <ListGroup.Item>Do you sell alcohol?</ListGroup.Item>
                                <ListGroup.Item>Do you sell food and drink?</ListGroup.Item>
                                <ListGroup.Item>Do vendors accept credit cards?</ListGroup.Item>
                            </ListGroup>
                            <Button variant="secondary">More Questions</Button>
                        </Card>
                    </Col>
                    <Col md={6}><Card>
                        <Card.Img className="faq-card" variant="top" src={require("../images/ticket sales.PNG")} />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Concert is sold out?</ListGroup.Item>
                            <ListGroup.Item>Can't attend show I bought tickets for?</ListGroup.Item>
                            <ListGroup.Item>Do you accept credit cards at the gate?</ListGroup.Item>
                        </ListGroup>
                        <Button variant="secondary">More Questions</Button>
                    </Card>
                    </Col>
                </Row>
                {/* <CardGroup> */}
                <Row>
                    <Col md={6}><Card>
                        <Card.Img className="faq-card" variant="top" src={require("../images/parking and seating.PNG")} />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Can I camp?</ListGroup.Item>
                            <ListGroup.Item>Is there seating?</ListGroup.Item>
                            <ListGroup.Item>Is there reserved parking?</ListGroup.Item>
                        </ListGroup>
                        <Button variant="secondary">More Questions</Button>
                    </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Img className="faq-card" variant="top" src={require("../images/policy.PNG")} />
                            <ListGroup variant="flush">
                                <ListGroup.Item>Can I bring my pet?</ListGroup.Item>
                                <ListGroup.Item>Can I smoke in the barn?</ListGroup.Item>
                                <ListGroup.Item>Can I talk loudly during songs?</ListGroup.Item>
                            </ListGroup>
                            <Button variant="secondary">More Questions</Button>
                        </Card>
                    </Col>
                </Row>


                {/* </CardGroup> */}
            </Container>
        </div>

    )
}

export default FAQ;