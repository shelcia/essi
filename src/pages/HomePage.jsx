import React from "react";
import About from "../components/About";
import Carousel from "../components/Carousal";

const HomePage = () => {
  return (
    <React.Fragment>
      <Carousel />
      <About />
    </React.Fragment>
  );
};

export default HomePage;
