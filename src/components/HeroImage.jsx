import React from "react";

const HeroImage = () => {

  return (
    <>
      <h1>Codfish Hollow Barnstormers</h1>
      <p>Awesome Live Music + Cool Old Barn</p>
      <img
        className="carousel"
        src={require("../images/image1.jpeg")}
        alt="First slide"
      />
    </>
  );
};

export default HeroImage;
