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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  const [footerLinks] = useState([
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Articles",
      link: "/articles",
    },
    {
      name: "Join Us",
      link: "/joinessi",
    },
    {
      name: "Office Bearers",
      link: "/officebearers",
    },
  ]);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">ESSI•</h1>
          </Col>
          <Col md="3">
            <Nav>
              {footerLinks.map((item, index) => (
                <NavItem key={index}>
                  <NavLink to={item.link} tag={Link}>
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              {footerLinks.map((item, index) => (
                <NavItem key={index}>
                  <NavLink to={item.link} tag={Link}>
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
