import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import { Accordion } from "react-bootstrap";


const FAQ = () => {
    return (
        <div>
            <img
                className="faq-hero-image"
                src={require("../images/band playing.jpg")}
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
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Do you sell alcohol?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! We sell a few types of can beer and some bottled beer and wine. No outside coolers allowed.
                                        You may still bring your coolers to the camping area/parking lot, but no coolers or outside drinks
                                        on the hay rack or past the ticket area. You must bring a photo ID if you would like to purchase alcohol.
                                        Cash only, we do not accept credit/debit cards or checks.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Do you sell food and drink?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! We have a food truck at every show, sometimes two!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do vendors accept credit cards?</Accordion.Header>
                                    <Accordion.Body>
                                        Unfortunately we only accept cash payment. There is an ATM at the barn but sometimes the internet
                                        is spotty so it is best to bring cash.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
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
            </Container>
        </div>

    )
}

export default FAQ;