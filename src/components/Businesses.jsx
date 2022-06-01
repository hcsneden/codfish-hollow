import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

const Businesses = () => {
  return (
    <div className="business-container">
      <h2>More in Maquoketa</h2>
      <p>
        While you're in town, check out these local businesses who help keep the
        music going.
      </p>
      <Container>
        <Row >
          <Col md={3} sm ={12}>
            <img className="business-image" src={require("../images/brewery-logo.png")} />
            <a href="https://maqbrew.com/"className="business-name">Maquoketa Brewing</a>
          </Col>
          <Col md={3} sm ={12}>
            <img className="business-image" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b1/b5/d1/squires-manor.jpg?w=900&h=-1&s=1"/>
            <a href="https://squiersmanor.com/"className="business-name">Squires Manor</a>
          </Col>
          <Col md={3} sm ={12}>
            <img className="business-image" src="https://secure-cdn.scdn6.secure.raxcdn.com/media/userfiles/subsite_161/images/news/decker%20hotel.jpg" />
            <a href="http://deckerhousehotel.com/"className="business-name">Decker Hotel, Restaurant & Bar</a>
          </Col>
          <Col md={3} sm ={12}>
            <img className="business-image" src="https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.18169-9/20046589_1579569498755183_6358567046091279755_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QKnQCZsegpAAX8DFAIY&_nc_ht=scontent.ffcm1-1.fna&oh=00_AT8vwcsX4ikodtQH_aCwhc7fLgihu5o3mo7yFYWU-AljsQ&oe=62BAFBE0" />
            <a href="https://www.facebook.com/Main-Street-Cafe-100849506627197/"className="business-name">Main Street Cafe</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Businesses;
