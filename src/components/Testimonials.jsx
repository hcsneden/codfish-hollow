import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
    return (
        <Container className='testimonials-container'>
            <h1>What have people said about us?</h1>
            <h2>The Musicians</h2>
            <Carousel className='testimonial'>
                <Carousel.Item>
                    <img
                        className="musician-photo"
                        src={require("../images/John c riely.PNG")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>John C. Reilly</h3>
                        <p>"The barn at Codfish Hollow looks amazing. It looks almost like being in the belly of a whale or something."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="musician-photo"
                        src={require("../images/adam duritz.jpg")}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Adam Duritz</h3>
                        <p>"Best. Weekend. Ever."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="musician-photo"
                        src={require("../images/the whigs.PNG")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The Whigs</h3>
                        <p>"Easily one of our favore venues in the country! Codfish Hollow provides the perfect balance of
                            pro music venue and small town, community driven house party. It's a slice of America with hospitality
                            second to none."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="musician-photo"
                        src={require("../images/jimmie linville.PNG")}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Jimmie Linville</h3>
                        <p>"Codfish Hollow is a special place. I would try to compare its unique greatness to something,
                            in order to better express it, but there's no place that comes close. Nestled in the middle of nowhere Iowa,
                            Codfish is a place where musicians finally have a home & family. I look forward to it on every tour."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="musician-photo"
                        src={require("../images/pete remm.jpg")}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Pete Remm</h3>
                        <p>"If it ain't Codfish Hollow, it ain't nothin'."</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2>The Attendees</h2>
            <Carousel className='testimonial'>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/review 1.PNG")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>5 Stars</h3>
                        <p>"Have seen 3 shows at CFH - Andrew WK, Dinosaur Jr., and Lucero -
                            all fantastic shows and great experience!  Easy Action opened for Dinosaur Jr.
                            I believe, and were also Super Fantastic!!!" -William Kearney, Google Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/walk or wait crop.jpg")}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>5 Stars</h3>
                        <p>"This place is unique and worth the drive! Park in a cow pasture, take the shuttle
                            bus (or walk) down to the barn and into the fun.  Bands, beverages, and food.  This is a must see place.
                            Music sounds great in the barn." -Eric Pleiss, Google Reviews </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/review 3.PNG")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>5 Stars</h3>
                        <p>"It's an intimate outdoor venue surrounded by great scenery with onsite arts & crafts as well
                            as food and beverage sales at reasonable prices. Inside there's no bad spot for a view of the band
                            and the sound carries well outside if you'd rather lounge on the hillside taking in the gorgeous night sky.
                            The walk from parking is a short one, but they have a hayrack piloted by the one and only Marv that'll get you
                            back and forth from the parking area to the venue venue. There's also camping available-you couldn't ask for a better
                            intimate outdoor setting." - Jon Frasher, Google Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/review 4.PNG")}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>4 Stars</h3>
                        <p>"A very cool place to catch live music. It's rural with gravel roads for access, and it can be warm and humid,
                            but a pretty fine time is almost guaranteed for all. Enjoy!" -Bunny Fandel, Google Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/review 5.PNG")}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>5 Stars</h3>
                        <p>"If you like folk/indie music and a good time, then go to Codfish Hollow for a concert. This place is awesome,
                            it's our favorite concert venue. Good beer, good food at the food truck, cool and local art, and they have
                            some amazing bands that put on a great show. Tickets are always a reasonable price. Parking is free and they
                            even let you camp in the cow pasture the night of the concert." -Danelle Baar, Google Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="review-photo"
                        src={require("../images/review 6.PNG")}
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3>5 Stars</h3>
                        <p>"Excellent place to see a show. Great experience from the setting to the tractor ride to the stage to various
                            artists selling cool stuff. Only downside was lots of drunks talking during show." -Tim Duggan, Google Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    )
}

export default Testimonials;