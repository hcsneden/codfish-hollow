import React, { useState, useEffect } from "react";
import { getShowData } from "../api/showslinger";
import { Row, Col, Card, Image, Button } from "react-bootstrap";

const UpcomingShows = () => {
  const [shows, setShows] = useState([
    {
      _id: "",
      eventName: "",
      price: "",
      date: "",
      image: "",
    },
  ]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const getData = async () => {
      const upcoming = await getShowData();
      setShows(upcoming);
      console.log(shows);
    };
    getData();
  }, [shows]);

  return (
    // <div className="show-container">
    //   <div dangerouslySetInnerHTML={shows}></div>
    // </div>
    <div>
      
      <div className="upcoming-shows">
      <h2>Upcoming Shows</h2>
        <Row md={3}>
          {shows.map((item, index) => {
            return (
              <Col key={index}>
                <Card className="card">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={require("../images/image1.png")}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {item.eventName}
                    </Card.Title>
                    <Card.Text className="card-price">{item.price}</Card.Text>
                    <Card.Text className="card-date">{item.date}</Card.Text>
                    <Button varient="primary" className="primary-btn">
                      Tickets
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default UpcomingShows;