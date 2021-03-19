import React from "react";
import { Button, Row, Col } from "reactstrap";

const WhyJoin = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/blob.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="10" md="10">
                <h1 className="text-white">
                  Why Join ESSI <br />
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
                  <p className="category text-success d-inline">Join Us</p>
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
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyJoin;
