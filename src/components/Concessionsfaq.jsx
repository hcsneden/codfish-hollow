import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from "react-router-dom";

const Concessionsfaq = () => {
    const navigate = useNavigate()
    function onFaqClick() {
        navigate("/faq");
    }
    function onHomeClick() {
        navigate("/");
    }
    return (
        <Container className='white-body'>
            <Breadcrumb className='breadcrumb-food'>
                <Breadcrumb.Item onClick={onHomeClick}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={onFaqClick}>FAQ</Breadcrumb.Item>
                <Breadcrumb.Item active>Concessions</Breadcrumb.Item>
            </Breadcrumb>


            <img className="concession-hero-image" src={require("../images/concessions.PNG")}
                alt="Picture of burger with the word concessions"
            />

            <h3 className='refreshments'>We're committed to giving our audiences the best concert experience possible
                by offering great food and refreshments.</h3>

            <div className='concession-container'>

                <h2 className='concession-heading'>Do you sell alcohol?</h2>
                <p className='concession-text'>Yes! We sell a few types of can beer and some bottled beer and wine. No outside
                    coolers allowed. You may still bring your coolers to the camping area/parking lot,
                    but no coolers or outside drinks on the hay rack or past the ticket area. You must
                    bring a photo ID if you would like to purchase alcohol. Cash only, we do not accept
                    credit/debit cards or checks.</p>
            </div>
            <div className='concession-container'>

                <h2 className='concession-heading'>Do you sell food and drink?</h2>
                <p className='concession-text'>Yes! We have a food truck at every show, sometimes two!</p>

            </div>
            <div className='concession-container'>

                <h2 className='concession-heading'>Do vendors accept credit/debit?</h2>
                <p className='concession-text'>Unfortunately we only accept cash payment. There is an ATM at the
                    barn but sometimes the internet is spotty so it is best to bring cash.</p>
            </div>

        </Container>
    )
}

export default Concessionsfaq;