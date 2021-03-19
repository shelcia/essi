import React from "react";
import About from "../components/About";
import Carousel from "../components/Carousal";
import Exhibition from "../components/Exhibitions";

const HomePage = () => {
  return (
    <React.Fragment>
      <Carousel />
      <About />
      <Exhibition />
    </React.Fragment>
  );
};

export default HomePage;
