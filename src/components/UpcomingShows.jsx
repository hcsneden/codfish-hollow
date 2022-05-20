import React, { useState, useEffect } from "react";
import { getShowData } from "../api/showslinger";

const UpcomingShows = () => {
  const [shows, setShows] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const getData = async () => {
      const upcoming = await getShowData();
      setShows(upcoming);
      console.log(shows);
    };
    getData();
  }, []);

  return (
    <div className="show-container">
      <div dangerouslySetInnerHTML={shows}></div>
    </div>
  );
};

export default UpcomingShows;
