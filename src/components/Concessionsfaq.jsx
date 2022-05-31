import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Concessionsfaq = () => {
    return (
        <Container>
            <Breadcrumb className='concession-breadcrumbs'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">FAQ</Breadcrumb.Item>
                <Breadcrumb.Item active>Concessions</Breadcrumb.Item>
            </Breadcrumb>


            <img className="concession-hero-image" src={require("../images/concessions.PNG")}
                alt="Picture of hamburger, drink and the word Concessions"
            />

            <h3>We're committed to giving our audiences the best concert experience possible 
                by offering great food and refreshments.</h3>

            <h2>Do you sell alcohol?</h2>
            <p>Yes! We sell a few types of can beer and some bottled beer and wine. No outside
                 coolers allowed. You may still bring your coolers to the camping area/parking lot,
                  but no coolers or outside drinks on the hay rack or past the ticket area. You must 
                  bring a photo ID if you would like to purchase alcohol. Cash only, we do not accept 
                  credit/debit cards or checks.</p>

            <h2>Do you sell food and drink?</h2>
            <p>Yes! We have a food truck at every show, sometimes two!</p>

            <h2>Do vendors accept credit/debit?</h2>
            <p>Unfortunately we only accept cash payment. There is an ATM at the 
                barn but sometimes the internet is spotty so it is best to bring cash.</p>

        </Container>
    )
}

export default Concessionsfaq;