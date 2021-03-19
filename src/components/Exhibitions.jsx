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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Exhibition = () => {
  const [confernces] = useState([
    {
      title:
        "THE 3RD NATIONAL CONFERENCE ON MATERIALS FOR ENERGY CONVERSION AND STORAGE (IIT BHU, VARANASI)",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587854138900510/Screenshot_2021-03-20_at_3.20.17_AM.png",
      color: "default",
      type: "Conclave",
      date: "18-20 October 2018",
      body:
        "3rd National Conference on Materials for Energy Conversion and Storage (MECS-2018) was organized at IIT(BHU) Varanasi as a part of the Centenary Celebration of IIT (BHU) in association with Energy Science Society of India (ESSI. The conference witness the gathering of around 150 dignitary and participants from various institutions of India as well as participants from abroad. Participants, the young minds from various institutions such as Pondicherry University, Banaras Hindu University, Delhi University, IIT Mandi, IIT Gandhinagar, IIT Madras, IIT Hyderabad, IIT Jodhpur, IIT (BHU) and various other academic institutions of high learning and study in India have taken all the efforts to make the conference memorable.The conference was honored by the gracious presence of Dr. Vijayamohanan Pillai, Director CECRI Karaikudi who inaugurated the conference and set the agenda for the conference. The three days of the conference witnesses various lectures from the expert in the field energy materials decoding the various strategies to tackle the energy challenges faced by the society. Conference also showcased the various findings and dedicated contribution of young innovative research scholars in form of many poster and oral presentation made by them during the conference. Professor Ramaswamy Murugan, president ESSI made the presentation about the role of ESSI in galvanizing the energy materials research in India and also showcased the bright future of solid ceramic electrolyte in developing all solid state batteries. Professor Donald Siegel, University of Michigan USA and Dr. Frederic Langer, Germany also showcased their findings of high pressure hydrogen storage free standing polymer electrolytes. Various presentation covering the different aspects and materials challenges for energy storage, conversion and harvesting from renewable sources were delivered by respected experts and dignitaries participated in the conference. Overall MECS -2018 witnessed 2 plenary talks, 8 keynotes and 30 presentations from the expert in field and around 15 oral presentations from students and industry participants in the span of 8 technical sessions during 18th to 20th October 2018.",
    },
    {
      title:
        "A CONCLAVE ON “MATERIALS & TECHNOLOGIES IN ENERGY CONVERSION & STORAGE” (MTECS 2018) - E-VEHICLE(IIITDM KANCHEEPURAM)",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587980983828480/Screenshot_2021-03-20_at_3.20.47_AM.png",
      color: "danger",
      type: "Conclave",
      date: "28-29 December 2018",
      body:
        "A conclave on “Materials and Technologies In Energy Conversion & Storage” (MTECS 2018) - E-Vehicle“ is to be hosted on 28th and 29th of December 2018 in IIITDM Kancheepuram, Chennai in association with Energy Science Society of India (ESSI). The conclave will be inaugurated by Prof. G. Sundararajan of IIT Madras (Padma Shri Awardee), Prof. Banshidhar Majhi, Director – IIITDM Kancheepuram, Dr.S.Mohan - CECRI- Chennai, Prof. Murugan Ramaswamy – Pondichery University, Dr. Pattabhi Reddy is to grace the occasion. The conclave is to featured the recent trends and innovation related to Energy Conversion and Storage, Electric Vehicle, Plug-in Charging Stations, Battery Management, Thermal Management, Future Strategies, Sustainability. Prominent speakers are as follows",
    },
    {
      title:
        "Seminar on Materials for Energy Conversion and Storage (MECS-2014), 08th March 2014, Department of Physics, Pondicherry University, Puducherry",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822586909254746183/Screenshot_2021-03-20_at_3.16.24_AM.png",
      color: "primary",
      type: "Seminar",
      date: "08th March 2014",
      body:
        "3rd National Conference on Materials for Energy Conversion and Storage (MECS-2018) was organized at IIT(BHU) Varanasi as a part of the Centenary Celebration of IIT (BHU) in association with Energy Science Society of India (ESSI. The conference witness the gathering of around 150 dignitary and participants from various institutions of India as well as participants from abroad. Participants, the young minds from various institutions such as Pondicherry University, Banaras Hindu University, Delhi University, IIT Mandi, IIT Gandhinagar, IIT Madras, IIT Hyderabad, IIT Jodhpur, IIT (BHU) and various other academic institutions of high learning and study in India have taken all the efforts to make the conference memorable.The conference was honored by the gracious presence of Dr. Vijayamohanan Pillai, Director CECRI Karaikudi who inaugurated the conference and set the agenda for the conference. The three days of the conference witnesses various lectures from the expert in the field energy materials decoding the various strategies to tackle the energy challenges faced by the society. Conference also showcased the various findings and dedicated contribution of young innovative research scholars in form of many poster and oral presentation made by them during the conference. Professor Ramaswamy Murugan, president ESSI made the presentation about the role of ESSI in galvanizing the energy materials research in India and also showcased the bright future of solid ceramic electrolyte in developing all solid state batteries. Professor Donald Siegel, University of Michigan USA and Dr. Frederic Langer, Germany also showcased their findings of high pressure hydrogen storage free standing polymer electrolytes. Various presentation covering the different aspects and materials challenges for energy storage, conversion and harvesting from renewable sources were delivered by respected experts and dignitaries participated in the conference. Overall MECS -2018 witnessed 2 plenary talks, 8 keynotes and 30 presentations from the expert in field and around 15 oral presentations from students and industry participants in the span of 8 technical sessions during 18th to 20th October 2018.",
    },
    {
      title:
        "1st National Conference on Materials for Energy Conversion and Storage (MECS-2015) and One Day Workshop on Computational Techniques for Energy Materials, 19-21 March 2015- VIT University, Chennai.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587177531080724/Screenshot_2021-03-20_at_3.17.35_AM.png",

      color: "warning",
      type: "Conference",
      date: "19-21 March 2015",
      body:
        "3rd National Conference on Materials for Energy Conversion and Storage (MECS-2018) was organized at IIT(BHU) Varanasi as a part of the Centenary Celebration of IIT (BHU) in association with Energy Science Society of India (ESSI. The conference witness the gathering of around 150 dignitary and participants from various institutions of India as well as participants from abroad. Participants, the young minds from various institutions such as Pondicherry University, Banaras Hindu University, Delhi University, IIT Mandi, IIT Gandhinagar, IIT Madras, IIT Hyderabad, IIT Jodhpur, IIT (BHU) and various other academic institutions of high learning and study in India have taken all the efforts to make the conference memorable.The conference was honored by the gracious presence of Dr. Vijayamohanan Pillai, Director CECRI Karaikudi who inaugurated the conference and set the agenda for the conference. The three days of the conference witnesses various lectures from the expert in the field energy materials decoding the various strategies to tackle the energy challenges faced by the society. Conference also showcased the various findings and dedicated contribution of young innovative research scholars in form of many poster and oral presentation made by them during the conference. Professor Ramaswamy Murugan, president ESSI made the presentation about the role of ESSI in galvanizing the energy materials research in India and also showcased the bright future of solid ceramic electrolyte in developing all solid state batteries. Professor Donald Siegel, University of Michigan USA and Dr. Frederic Langer, Germany also showcased their findings of high pressure hydrogen storage free standing polymer electrolytes. Various presentation covering the different aspects and materials challenges for energy storage, conversion and harvesting from renewable sources were delivered by respected experts and dignitaries participated in the conference. Overall MECS -2018 witnessed 2 plenary talks, 8 keynotes and 30 presentations from the expert in field and around 15 oral presentations from students and industry participants in the span of 8 technical sessions during 18th to 20th October 2018.",
    },
    {
      title:
        "2nd National Conference on Materials for Energy Conversion and Storage (MECS- 2016), 11-13 March 2016, Department of Physics, Pondicherry University, Puducherry.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587352869765210/Screenshot_2021-03-20_at_3.18.16_AM.png",
      color: "success",
      type: "Conference",
      date: "11-13 March 2016",
      body:
        "3rd National Conference on Materials for Energy Conversion and Storage (MECS-2018) was organized at IIT(BHU) Varanasi as a part of the Centenary Celebration of IIT (BHU) in association with Energy Science Society of India (ESSI. The conference witness the gathering of around 150 dignitary and participants from various institutions of India as well as participants from abroad. Participants, the young minds from various institutions such as Pondicherry University, Banaras Hindu University, Delhi University, IIT Mandi, IIT Gandhinagar, IIT Madras, IIT Hyderabad, IIT Jodhpur, IIT (BHU) and various other academic institutions of high learning and study in India have taken all the efforts to make the conference memorable.The conference was honored by the gracious presence of Dr. Vijayamohanan Pillai, Director CECRI Karaikudi who inaugurated the conference and set the agenda for the conference. The three days of the conference witnesses various lectures from the expert in the field energy materials decoding the various strategies to tackle the energy challenges faced by the society. Conference also showcased the various findings and dedicated contribution of young innovative research scholars in form of many poster and oral presentation made by them during the conference. Professor Ramaswamy Murugan, president ESSI made the presentation about the role of ESSI in galvanizing the energy materials research in India and also showcased the bright future of solid ceramic electrolyte in developing all solid state batteries. Professor Donald Siegel, University of Michigan USA and Dr. Frederic Langer, Germany also showcased their findings of high pressure hydrogen storage free standing polymer electrolytes. Various presentation covering the different aspects and materials challenges for energy storage, conversion and harvesting from renewable sources were delivered by respected experts and dignitaries participated in the conference. Overall MECS -2018 witnessed 2 plenary talks, 8 keynotes and 30 presentations from the expert in field and around 15 oral presentations from students and industry participants in the span of 8 technical sessions during 18th to 20th October 2018.",
    },
    {
      title:
        "1st World Conference on Solid Electrolytes for Advanced Applications: Garnets and Competitors” organised by Department of Physics, Pondicherry University, India in association with Energy Science Society of India in September 6-9, 2017",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822587352869765210/Screenshot_2021-03-20_at_3.18.16_AM.png",
      color: "info",
      type: "Conference",
      date: "6-9 September 2017",
      body:
        "3rd National Conference on Materials for Energy Conversion and Storage (MECS-2018) was organized at IIT(BHU) Varanasi as a part of the Centenary Celebration of IIT (BHU) in association with Energy Science Society of India (ESSI. The conference witness the gathering of around 150 dignitary and participants from various institutions of India as well as participants from abroad. Participants, the young minds from various institutions such as Pondicherry University, Banaras Hindu University, Delhi University, IIT Mandi, IIT Gandhinagar, IIT Madras, IIT Hyderabad, IIT Jodhpur, IIT (BHU) and various other academic institutions of high learning and study in India have taken all the efforts to make the conference memorable.The conference was honored by the gracious presence of Dr. Vijayamohanan Pillai, Director CECRI Karaikudi who inaugurated the conference and set the agenda for the conference. The three days of the conference witnesses various lectures from the expert in the field energy materials decoding the various strategies to tackle the energy challenges faced by the society. Conference also showcased the various findings and dedicated contribution of young innovative research scholars in form of many poster and oral presentation made by them during the conference. Professor Ramaswamy Murugan, president ESSI made the presentation about the role of ESSI in galvanizing the energy materials research in India and also showcased the bright future of solid ceramic electrolyte in developing all solid state batteries. Professor Donald Siegel, University of Michigan USA and Dr. Frederic Langer, Germany also showcased their findings of high pressure hydrogen storage free standing polymer electrolytes. Various presentation covering the different aspects and materials challenges for energy storage, conversion and harvesting from renewable sources were delivered by respected experts and dignitaries participated in the conference. Overall MECS -2018 witnessed 2 plenary talks, 8 keynotes and 30 presentations from the expert in field and around 15 oral presentations from students and industry participants in the span of 8 technical sessions during 18th to 20th October 2018.",
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
                Seminars and Conferences{" "}
                {/* <span className="text-info">that fits you</span> */}
              </h1>
            </Col>
          </Row>
          <Row className="mt-5">
            {confernces.map((item, index) => (
              <Cards key={index} item={item} />
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Exhibition;

const Cards = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      <Col md="4" className="my-5">
        <Card className="card-coin card-plain conference-cards ">
          <CardHeader>
            <img alt="..." className="img-center img-fluid" src={item.image} />
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
            <Button className="btn" color={item.color} onClick={toggleModal}>
              Know More
            </Button>
          </CardFooter>
        </Card>
      </Col>
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModal}
        size="lg"
        modalClassName="modal-black"
      >
        <ModalHeader className="justify-content-center" toggle={toggleModal}>
          <h2>{item.title}</h2>
          <hr className={`line-${item.color}`} />
        </ModalHeader>

        <ModalBody>{item.body}</ModalBody>
        <ModalFooter>
          <Button
            className="btn ml-auto"
            color={item.color}
            onClick={toggleModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
