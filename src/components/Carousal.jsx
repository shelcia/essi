import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/822500818321539112/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg",
    altText: "Conference",
    caption: "Conference",
  },
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/822500820846903376/icons8-team-yTwXpLO5HAA-unsplash.jpg",
    altText: "Slide 2",
    caption: "Conference",
  },
  {
    src:
      "https://cdn.discordapp.com/attachments/795010536365752320/822500811242340383/austin-distel-FQ0tfv5xzBA-unsplash.jpg",
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
