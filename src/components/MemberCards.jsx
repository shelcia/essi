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
import React from "react";
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
} from "reactstrap";

const MemberCards = () => {
  return (
    <React.Fragment>
      <section className="section section-lg section-coins">
        <img
          alt="..."
          className="path"
          src={require("../assets/img/path3.png").default}
        />
        <Container>
          <Row>
            <Col md="6">
              <hr className="line-info" />
              <h1>
                Choose the membership plan{" "}
                <span className="text-info">that fits you</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Life member</h4>
                      <span>Membership</span>
                      <hr className="line-primary" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>
                        Rs. 1000 for Indian citizens / USD100 or equivalent for
                        other countries except Nepal
                      </ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="primary">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Institution member</h4>
                      <span>Membership</span>
                      <hr className="line-success" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>
                        Rs.7,500/- per year (or) Rs.75,000 for onetime for Life
                        membership
                      </ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="success">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Industry member</h4>
                      <span>Membership</span>
                      <hr className="line-info" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>
                        Rs.10,000/- per year (or) Rs.1,00,000 for onetime for
                        Life membership
                      </ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="info">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Student member</h4>
                      <span>Membership</span>
                      <hr className="line-warning" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>Rs.200 per year</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="warning">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Donor member</h4>
                      <span>Membership</span>
                      <hr className="line-danger" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>Rs. 25000/- or more</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="danger">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MemberCards;
