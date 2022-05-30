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
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Concert is sold out?</Accordion.Header>
                                <Accordion.Body>
                                    Unfortunately, when a show sells out in advance there are no tickets left at all.
                                    We always highly recommend getting tickets in advance on our website to avoid
                                    being shut-out of a show you want to see.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can't attend show I bought tickets for?</Accordion.Header>
                                <Accordion.Body>
                                    You can contact us for a refund. We may be able to refund you in certain circumstances.
                                    Contact us with the name and email of your ticket buyer. We will change your tickets to
                                    their name and email so they will receive any important updates or correspondence about the show.
                                    When the name and email has been changed properly, it's much easier for everyone at the gate/check in.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Do you accept credit cards at the gate?</Accordion.Header>
                                <Accordion.Body>
                                    Unfortunately we only accept cash payment. There is an ATM at the barn but sometimes the internet
                                    is spotty so it is best to bring cash.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Button variant="secondary">More Questions</Button>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}><Card>
                        <Card.Img className="faq-card" variant="top" src={require("../images/parking and seating.PNG")} />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Can I camp?</Accordion.Header>
                                <Accordion.Body>
                                    Yes! Camping is free! Camping available the night of the show only. No early birds please.
                                    You may come up to TWO hours before posted door time to set up camp. No camping the day before.
                                    No camping the day after. It’s not a campground, just a cow pasture/field with a few fire rings.
                                    No electric hook-ups for campers. No running water. Tents and coolers and food are okay to bring /
                                    just know you will most likely have to share community fire rings. Camp stoves and portable grills are fine.
                                    Firewood on site /free ( no out of state firewood!!!) Camping area is not right next to the barn, but right
                                    next to the parking area with a hayride to and from the barn (1/4 mile away) No camping at the barn!!!
                                    Camping also available at the Maquoketa Caves State Park and Horseshoe Pond park in Maquoketa.

                                    If you aren’t into camping, we suggest lodging at Squier’s Manor Bed and Breakfast or The Decker House House Hotel !

                                    Note: For us to allow free camping we rely on all of you to be respectful of the place and of others, and please don’t
                                    trash the place (pack out what you pack in).
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Is there seating?</Accordion.Header>
                                <Accordion.Body>
                                    There is limited church pew seating in the barn to sit on. Otherwise the barn is standing room only! You can sit on the
                                    hillside outside the barn and we have picnic tables outside and below in the food court. Otherwise some people bring their
                                    lawn chairs and/or blankets. Lawn chairs are for outside seating only. Please, no lawn chairs in the barn!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Is there reserved parking?</Accordion.Header>
                                <Accordion.Body>
                                    No there is not. The parking lot is a cow pasture. There are hay rack rides to and from the barn. The barn is limited hay
                                    bale seating along the sides and standing room only. If you need special assistance or have special requests, we will gladly
                                    TRY to accommodate you if you contact us well in advance (not the DAY OF the show) with your requests.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Button variant="secondary">More Questions</Button>
                    </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Img className="faq-card" variant="top" src={require("../images/policy.PNG")} />
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Can I bring my pet?</Accordion.Header>
                                    <Accordion.Body>
                                        We kindly ask you to leave your pets at home.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I smoke in the barn?</Accordion.Header>
                                    <Accordion.Body>
                                        NO !!! But you can smoke on the grounds. We kindly ask you to just stay away from the
                                        barns and house when you do it!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I talk loudly during songs?</Accordion.Header>
                                    <Accordion.Body>
                                        NO! PLEASE NO! We would ask everyone to please be respectful and mindful of the
                                        performers who are playing for you and the other fans who are there to enjoy the music. 
                                    THAT MEANS: IF YOU WANT TO TALK > PLEASE GO OUTSIDE! The barn is a place for LISTENING.
                                        If you are being disruptive you will be escorted out of the barn area. Please be courteous of others. Thank you!
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Button variant="secondary">More Questions</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default FAQ;