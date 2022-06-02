import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const History = () => {
    const navigate = useNavigate()
    function onAboutClick() {
        navigate("/about");
    }
    function onHomeClick() {
        navigate("/");
    }

    return (
        <Container className='about-container'>
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item onClick={onHomeClick}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={onAboutClick}>About</Breadcrumb.Item>
                <Breadcrumb.Item active>History</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col md={6}>
                    <img className='about-image' src={require("../images/codfish hollow from above.jpg")}
                        alt="View of the land from above"
                    />
                </Col>
                <Col className='about-col' md={6}>
                    <img className='history-logo' src={require("../images/logo.jpg")} />
                    <h1 className='about'>Our Story</h1>
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
                        <img className='about-image' src={require("../images/our first show.PNG")}
                            alt="Image of codfish hollow land from above"
                        />
                    </Col>
                </Row>
            </div>
            <p className='about-text'>"They celebrated the completion of the barn with a barn dance. The round barn hosted live music again, 55 years later in 2009 with the first Daytrotter Barnstormer..."</p>
            <Carousel className='history'>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/1910.PNG")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='history-text'>The Stamp Farm (now Codfish Hollow) around the year 1910</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/1953.PNG")}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>Workers building the round barn in 1953</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/building.PNG")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>The round barn building in progress, 1953.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/award.PNG")}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>1971 Arnold and Merigene Stamp (in the middle) receive
                             the Century Farm award for the farm where the Codfish 
                             Hollow Barn now stands. It has been in our family since 
                             1871 when Arnold’s grandpa, Orla Frederick Carl Stamp 
                             came over from Germany and built a log cabin on the side
                              of the bluff, behind where the old house/art gallery
                               now stands.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/cows.PNG")}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>Arnold Stamp, Tiffany's ( Codfish Hollow owner) grandfather</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/newspaper.PNG")}
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>“Arnold is widely respected in Eastern Iowa for his practical approach to soil conservation.
                             He has eliminated the problem of erosion, is building the productivity of his land and his program 
                             is paying off in dollars and cents. Grass and hay crops—with livestock—is a combination that builds
                              the soil and builds the men who use it—an excellent example is Arnold Stamp.”</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/news.PNG")}
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='history-text'>Tiffany’s grandfather, Arnold Stamp, was born in the house his parents built that still stands on the site today. 
                            Arnold built the round barn in 1954. They celebrated the completion of the barn with a barn dance. The round barn hosted live music again, 55 years later in 2009 with the first Daytrotter Barnstormer.</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default History;