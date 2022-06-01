import React, {useRef} from "react";
import { Button } from "react-bootstrap";

const HeroImage = () => {
  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <>
      <img
        className="d-block carousel"
        src={require("../images/image1.png")}
        alt="First slide"
      />
      <div className="banner">
        <h1 className="banner-header">Codfish Hollow <br/>
        Barnstormers</h1>
        <p>Awesome Live Music + Cool Old Barn</p>
        <Button onClick={executeScroll} className="btn-secondary header-button" varient="secondary">
          Buy Tickets
        </Button>
      </div>
      <div ref={myRef}></div>
    </>
  );
};

export default HeroImage;
