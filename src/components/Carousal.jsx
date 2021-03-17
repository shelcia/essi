import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/821871265265745961/Screenshot_2021-03-18_at_3.51.01_AM.png",
    altText: "Conference",
    caption: "Conference",
  },
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/821871273520529428/Screenshot_2021-03-18_at_3.51.13_AM.png",
    altText: "Slide 2",
    caption: "Conference",
  },
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/821871274280091688/Screenshot_2021-03-18_at_3.51.28_AM.png",
    altText: "Slide 3",
    caption: "Conference",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={carouselItems} />
      </>
    );
  }
}

export default Carousel;
