import React from "react";

const HeroImage = () => {
  return (
    <>
          <img
            className="d-block carousel"
            src={require("../images/image1.png")}
            alt="First slide"
          />
          <div className="banner">
            <h1 >Codfish Hollow Barnstormers</h1>
            </div>
    </>
  );
};

export default HeroImage;
