import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const OfficeCards = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      <Col md="6">
        <Card className="card-coin card-plain">
          <CardBody>
            <Row>
              <Col md="4">
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid rounded-circle shadow-lg"
                />
              </Col>
              <Col md="8">
                <h4>{item.name}</h4>
                <h6>{item.designation}</h6>
                <a href="mailto:" className="text-info">
                  {item.mail}
                </a>
                <small className="d-block my-2">{item.number}</small>
                <Button
                  className="btn-simple"
                  color="info"
                  onClick={toggleModal}
                >
                  Know More
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModal}
        size="lg"
        modalClassName="modal-black"
      >
        <ModalHeader toggle={toggleModal}>
          <h2>About {item.name}</h2>
          <hr className={`line-primary`} />
        </ModalHeader>

        <ModalBody>{item.content}</ModalBody>
        <ModalFooter>
          <Button className="btn ml-auto" color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default OfficeCards;
