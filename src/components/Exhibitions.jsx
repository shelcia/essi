/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";

const Exhibition = () => {
  const [confernces] = useState([
    {
      title:
        "Seminar on Materials for Energy Conversion and Storage (MECS-2014), 08th March 2014, Department of Physics, Pondicherry University, Puducherry",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822586909254746183/Screenshot_2021-03-20_at_3.16.24_AM.png",
      color: "primary",
      type: "Seminar",
      date: "08th March 2014",
    },
    {
      title:
        "1st National Conference on Materials for Energy Conversion and Storage (MECS-2015) and One Day Workshop on Computational Techniques for Energy Materials, 19-21 March 2015- VIT University, Chennai.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587177531080724/Screenshot_2021-03-20_at_3.17.35_AM.png",

      color: "warning",
      type: "Conference",
      date: "19-21 March 2015",
    },
    {
      title:
        "2nd National Conference on Materials for Energy Conversion and Storage (MECS- 2016), 11-13 March 2016, Department of Physics, Pondicherry University, Puducherry.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587352869765210/Screenshot_2021-03-20_at_3.18.16_AM.png",
      color: "success",
      type: "Conference",
      date: "11-13 March 2016",
    },
    {
      title:
        "1st World Conference on Solid Electrolytes for Advanced Applications: Garnets and Competitors” organised by Department of Physics, Pondicherry University, India in association with Energy Science Society of India in September 6-9, 2017",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587352869765210/Screenshot_2021-03-20_at_3.18.16_AM.png",
      color: "info",
      type: "Conference",
      date: "6-9 September 2017",
    },
    {
      title:
        "THE 3RD NATIONAL CONFERENCE ON MATERIALS FOR ENERGY CONVERSION AND STORAGE (IIT BHU, VARANASI)",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587854138900510/Screenshot_2021-03-20_at_3.20.17_AM.png",
      color: "default",
      type: "Conclave",
      date: "18-20 October 2018",
    },
    {
      title:
        "A CONCLAVE ON “MATERIALS & TECHNOLOGIES IN ENERGY CONVERSION & STORAGE” (MTECS 2018) - E-VEHICLE(IIITDM KANCHEEPURAM)",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587980983828480/Screenshot_2021-03-20_at_3.20.47_AM.png",
      color: "danger",
      type: "Conclave",
      date: "28-29 December 2018",
    },
  ]);

  return (
    <React.Fragment>
      <section className="section section-lg ">
        <img
          alt="..."
          className="path"
          src={require("../assets/img/path3.png").default}
        />
        <Container>
          <Row>
            <Col md="6">
              <hr className="line-info" />
              <h1 className="pb-5">
                Choose the membership plan{" "}
                <span className="text-info">that fits you</span>
              </h1>
            </Col>
          </Row>
          <Row className="mt-5">
            {confernces.map((item, index) => (
              <Col md="4" key={index} className="my-5">
                <Card className="card-coin card-plain conference-cards ">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={item.image}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">{item.type}</h4>
                        <span>{item.date}</span>
                        <hr className={`line-${item.color}`} />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>{item.title}</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn" color={item.color}>
                      Know More
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Exhibition;
