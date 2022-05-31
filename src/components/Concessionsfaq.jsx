import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Concessionsfaq = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">FAQ</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Concessions</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Concessionsfaq;