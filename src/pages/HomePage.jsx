import React from "react";
import About from "../components/About";
import Carousel from "../components/Carousal";
import Membership from "../components/Membership";

const HomePage = () => {
  return (
    <React.Fragment>
      <Carousel />
      <About />
      <Membership />
    </React.Fragment>
  );
};

export default HomePage;
