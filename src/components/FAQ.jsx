import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "bootstrap";

const FAQ = () => {
    return (

    <CardGroup>
        <Card>
            <Card.Img variant="top" src={require("../images/concessions.PNG")}/>
            <Card.Header>Concessions</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Do you sell alcohol?</ListGroup.Item>
                <ListGroup.Item>Do you sell food and drink?</ListGroup.Item>
                <ListGroup.Item>Do vendors accept credit cards?</ListGroup.Item>
            </ListGroup>
            <Button variant="light">More Questions</Button>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../images/ticket sales.PNG")}/>
            <Card.Header>Ticket Sales</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Concert is sold out?</ListGroup.Item>
                <ListGroup.Item>Can't attend show I bought tickets for?</ListGroup.Item>
                <ListGroup.Item>Do you accept credit cards at the gate?</ListGroup.Item>
            </ListGroup>
            <Button variant="light">More Questions</Button>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../images/parking and seating.PNG")}/>
            <Card.Header>Parking/Seating</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Can I camp?</ListGroup.Item>
                <ListGroup.Item>Is there seating?</ListGroup.Item>
                <ListGroup.Item>Is there reserved parking?</ListGroup.Item>
            </ListGroup>
            <Button variant="light">More Questions</Button>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../images/policy.PNG")}/>
            <Card.Header>Policy/Etiquette</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Can I bring my pet?</ListGroup.Item>
                <ListGroup.Item>Can I smoke in the barn?</ListGroup.Item>
                <ListGroup.Item>Can I talk loudly during songs?</ListGroup.Item>
            </ListGroup>
            <Button variant="light">More Questions</Button>
        </Card>
    </CardGroup>

    )
}

export default FAQ;