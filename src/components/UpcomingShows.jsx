import React, { useState, useEffect } from "react";
import { getShowData } from "../api/showslinger";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpcomingShows = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([
    {
      _id: "",
      eventName: "",
      price: "",
      date: "",
      image: "",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [ticketUrl, setTicketUrl] = useState('');

  const handleClose = () => {
    setShowModal(false);
  }
  const handleShow = (e) => { 
    setTicketUrl(e.target.id);
    setShowModal(true)
  };

  useEffect(() => {
    const getData = async () => {
      const upcoming = await getShowData();
      setShows(upcoming);
    };
    getData();
  }, []);

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
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {item.eventName}
                    </Card.Title>
                    <Card.Text className="card-price">{item.price}</Card.Text>
                    <Card.Text className="card-date">{item.date}</Card.Text>
                    <Button id={item.link} onClick={handleShow} varient="primary" className="primary-btn">
                      Tickets
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>A Few Things to Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          YES you can camp at the venue for free the night of the show <br></br>
          YES we serve alcohol (local brews)<br></br>
          NO you cannot attend a show without proof of vaccination
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href={ticketUrl}>
            Continue to Tickets
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default UpcomingShows;
