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
          <div className="content-center" style={{ maxWidth: "1200px" }}>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="8" md="8">
                <h1 className="text-white">
                  About Us <br />
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
                  <p className="category text-success d-inline">Know More</p>
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
              </Col>
              <Col lg="4" md="4">
                <div className="text-center">
                  <img
                    src="https://cdn.discordapp.com/attachments/795010536365752320/822582821528535060/Screenshot_2021-03-20_at_2.59.48_AM.png"
                    alt=""
                    className="img-fluid rounded shadow-lg mx-5 border border-primary"
                  />
                  <h4 className="mt-3">Prof. Ramaswamy Murugan</h4>
                  <h6 className="text-warning"> Our Founder</h6>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
