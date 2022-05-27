import React from "react";

const About = () => {
  return (
    <div>
      <div className='about-image-container'>
      <img className='about-image' src={require("../images/barn at night.PNG")}
        alt="About"
      />
      <h1>About Us</h1>
      <h2>What exactly do we do?</h2>
      </div>
      <p>Live music in a barn in the Hollow. We host live local and national indie bands in our barn.  Food vendors and alcoholic and non-alcoholic beverages available for purchase. Art gallery and vendors. Camping available.

        Bring your kids! Bring your grandparents! Bring your lawn chairs. (for outdoor seating only) Bring a blanket.
      </p>
      <button type="button" class="btn btn-light">Our History</button>
    </div>
  )
}

export default About;
