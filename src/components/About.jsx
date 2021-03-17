import React from "react";
import { Button, Row, Col } from "reactstrap";

const About = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/blob.png").default}
          />
          {/* <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png").default}
          /> */}
          {/* <img
            alt="..."
            className="shapes triangle"
            src={require("../assets/img/triunghiuri.png").default}
          /> */}
          {/* <img
            alt="..."
            className="shapes wave"
            src={require("../assets/img/waves.png").default}
          /> */}
          {/* <img
            alt="..."
            className="shapes squares"
            src={require("../assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../assets/img/cercuri.png").default}
          /> */}
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="10" md="10">
                <h1 className="text-white">
                  About Us <br />
                  <span className="text-white">secured</span>
                </h1>
                <p className="text-white mb-3">
                  ENERGY SCIENCE SOCIETY OF INDIA (ESSI), established in July
                  2013 and its office is located in Puducherry. The objective of
                  the ESSI is mainly to promote and share the knowledge in
                  ENERGY SCIENCE & TECHNOLOGY including all renewable energy,
                  conventional energy, energy storage science and technology,
                  energy efficient devices and any other new area in energy
                  science emerging in future.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    From 9.99%/mo
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                {/* <img
                  alt="..."
                  className="img-fluid"
                  src={require("../assets/img/etherum.png").default}
                /> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
