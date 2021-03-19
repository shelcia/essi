import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const ContactForm = () => {
  return (
    <React.Fragment>
      <section className="section mt-5">
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">Contact</h1>
                  {/* <h5 className="text-on-back"></h5> */}
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Your Name</label>
                          <Input placeholder="name" type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Email address</label>
                          <Input placeholder="johndoe@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Phone</label>
                          <Input type="text" placeholder="Your Phone no" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Company/Institution</label>
                          <Input
                            type="text"
                            placeholder="Your Company/Institution"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Message</label>
                          <Input placeholder="Your Message" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                    >
                      Send text
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip341148792"
                    >
                      Can't wait for your message
                    </UncontrolledTooltip>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto" md="4">
              <div className="info info-horizontal pt-0">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-square-pin" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p>
                    Pondicherry University, <br />
                    Chinna Kalapet, Kalapet, <br />
                    Puducherry 605014
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p>
                    Pondicherry University <br />
                    0413 265 5179 <br />
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactForm;
