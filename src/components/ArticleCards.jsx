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
// reactstrap components
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

export default function ArticleCards() {
  const [trends] = useState([
    {
      title: "SOLID STATE BATTERIES",
      content:
        "Qing Tao Energy Development of China has developed 400 Wh/kg Solid State Battery with solid electrolyte, which is resistance to fire and explosion safe. The Chinese company has already shown their product to many of the major automakers. Among those who sought to use solid- state batteries, called Volkswagen, Toyota and Dyson. The company involved Tsinghua University for the purpose. – According to the materials: ixbt.com",
    },
    {
      title: "FLOW BATTERIES",
      content:
        "Vanadium redox flow batteries can deliver power instantly and store up to hundreds of megawatts of energy usable during peak hours. Its Europe market is driven by rapid development of the electric vehicles and renewable power generation sectors. Global market size was at USD 142.1 million in 2017 and is to rise up to 60% over the forecast period from 2018 to 2025. – www. http://orbisresearch.com/",
    },
    {
      title: "3D BATTERIES",
      content:
        "Using three-dimensional printing, designers can make highly customized products, including shoe soles, engine parts, and some wearable electronics such as hearing aids. For the purpose experts from Harvard University constructed kinds of batteries, including rechargeable zinc-ion, in the shapes of rings, letters, circles, etc (ACS Nano 2018, DOI: 10.1021/acsnano.8b02744).",
    },
    {
      title: "LITHIUM ION BATTERIES - INDIA",
      content:
        "Many companies such as Exide, Exicom, Amaron, Greenfuel Energy Solutions, Trontek, Coslight India, Napino Auto & Electronics, Amara Raja Batteries, BASF Catalysts, Trinity Energy Systems, Versatile Auto Components have their plans to make lithium-ion batteries locally to play key role and get benefitted in on the wave for green vehicles in the country. Their plans has come close on the heels of the Prime Minister’s Office (PMO) directing an incentives of Rs 5,500 crore for the second phase of the FAME (Faster Adoption and Manufacturing of Hybrid and Electric Vehicles) India Schem. This is to mainly encourage local manufacturing of lithium-ion batteries, which is the power source of electric vehicles. Interestingly, Maruti Suzuki’s and Suzuki Motor Corporation (SMC) has packed with Toshiba and Denso to set up the country’s first lithium-ion battery manufacturing facility in Gujarat at an investment of Rs 1150 crore. The Mahindra & Mahindra has firmed up plans to pump in Rs 1000 crore to expand electric vehicle manufacturing capacity at its Bengaluru facility, set up a R&D centre and a new battery manufacturing unit in Chakan, Maharashtra. Mahindra has already made a agreement with South Korea’s LG Chem to make lithium-ion batteries in India. - Economic Times, Dec 05, 2018",
    },
  ]);

  const [knowledge] = useState([
    {
      title: "ORGANIC THERMOELECTRIC MATERIALS",
      content:
        " Organic semiconductors is a promising thermoelectric materials and it has low thermal conductivities (≈ 0.3 W m–1 K–1) and high electrical conductivities (> 1,000 S cm–2). The carrier concentrations and the device architecture are the two challenges encountered during the design of organic thermo-electrics. Firstly, it is important to control the charge carrier density of organic semiconductors by doping to achieve high electrical conductivities and excellent Seebeck coefficients. Then, the most common thermoelectric generator architecture relies on two semiconductor legs (p-n thermocouple) parallel in heat flow and series in charge carrier flow. An excellent p-type material is poly(3,4-ethylenedioxy thiophene) polystyrene sulfonate (PEDOT:PSS) – positive PEDOT and negative PSS. Though the research efforts in organic focus on the materials, device is an important area of research and there are two for the same. Even though the power factor and Figure of Merit (zT) are used to quantify the structure property relationship of organic materials, it is the actual power output offers an ultimate parameter to conclude the performance. From the point of application, the conversion efficiency of a device is dependent on device geometry and the interface property. Thus, novel designs upon geometry, construction of TEC modules, and development of solution processing (roll-to-roll and ink-jet printing) can increase the power generation, Peltier cooling, and many other applications. While characterization methods are well established for inorganic TE, a standard protocol for organic thermoelectric materials is yet to be evolved. To elucidate the performance of the TEC module, the size and shape of organic materials and electrodes, the properties of the substrate should be accurately reported. The power factor is used to evaluate the performance of organic materials, since in-plane thermal conductivity cannot be found easily. The 3ω method is used to measure the thermal conductivity of organic thermoelectric materials. The difficulties in device fabrication and measurement setup makes wide acceptance of this method difficult.",
    },
    {
      title: "IDENTIFY DEFECT IN BATTERIES",
      content:
        " Lock-in thermography : Thermal imaging is an well known technique for steady state thermo- gram of a object. Recent thermal imagers do give temperature distribution with high spatial resolution. But Lock-in thermography offers the ability to track the heat transfer mechanisms and internal defects. Lock-in thermography uses periodic electro-thermal stimulation on the amplitude and phase response of both new and aged Li-ion pouch cells. The Therefor the steady state thermal pattern is disturbed by this transient process. The thermal images captured during this process reveal the internal defects in batteries. The technique in the detection of gas pockets formed during cell aging, and internal defects in operational systems simultaneously. The technique works well for pouch batteries. - ECS Electrochemistry Letters, 4 (9) A106-A109 (2015)",
    },
  ]);
  const [scholar] = useState([
    {
      title:
        "Garnet Structured Solid Electrolytes for Next Generation Batteries",
      content:
        "As a promising next generation battery, all solid-state batteries are attaining much scientific interest in recent years since it is expected to overcome the limitations over safety concerns of flammable organic liquid electrolyte based batteries. A key material to develop a all solid-state battery is a solid electrolyte with high ionic conductivity and high electrochemical stability. Most of the solid electrolytes so far known only fulfills either one of the above requirement. Various oxide compounds like (Li,La)TiO3 show high lithium conductivity with poor electrochemical stability. Researchers have attempted to replace Ti with Zr since it is fixed valent and more stable. .However, this was unsuccessful . The family of garnet related structures exhibit several desired properties of solid electrolytes. Among them Li7La3Zr2O12 (LLZO) electrolyte reported by Murugan et al. in 2007 (Angew. Chemie Int. Ed. 46 (2007) 7778) has attained considerable attention since it holds both the requirements with a superior ionic conductivity of 10-4 S/cm and high electrochemical stability against metallic lithium. The early studies in LLZO focused on understanding the material properties and enhancing the conductivity by adding various dopants.Despite of the high ionic conductivity and high electrochemical stability realizing high performance all solid-state batteries with garnet electrolyte is still a hindrance due to high electrode-electrolyte interfacial resistance.Introducing a buffer layer between garnet electrolyte and electrode improves the contact and reduce the interfacial resistance. Intense research is going on for reducing the interfacial resistance since 2015. Metallic coatings like Au, Al, Ge, Mg, Si and oxide coatings of Al2O3 and ZnO between garnet electrolyte and metallic lithium was demonstrated and found successful in reducing the interfacial resistance in the anode side. Whereas at cathode side attempts have been made by introducing soft layers of Li3BO3 and Li4SiO4. However, high interfacial resistance is still a challenge for cathode side.The interfacial engineering so far known, has helped in fabricating all solid-state batteries with garnet electrolyte. However, further research in interface modification is essential in developing next generation batteries based on lithium garnet solid electrolytes.",
      author: "Indu M.S and Sreejith O.V",
      place:
        "High Energy Density Batteries Research Laboratory, Dept. of Physics, Pondicherry University, Puducherry, 605014 India",
    },
    {
      title: "Beyond Paschen's law ",
      content:
        "In 1889 Friedrich Paschen discovered an empirical relation between, the voltage required to initiate a discharge, known as breakdown voltage, between two electrodes in a gas as a function of pressure and gap length. This breakdown voltage inversely proportional to a material property of electrodes known as the secondary-electron-emission coefficient (SEEC), which is defined as “the number of secondary electrons produced per incident positive ion”. The Pachen’s law has been widely used is in field of electrical engineering and plasma based technologies and value of SEEC is very critical for devices like plasma displays. However, in recent years many researchers have reported different value for same material and further understanding of governing processes was desired.Mr. Saravanan A, research scholar from Department of Physics, Pondicherry University, working under guidance of Dr. Suraj Kumar Sinha along with other collaborators established experimentally that secondary electrons are not only emitted due to incident ion but also due to photons, excited species, energetic neutrals and surface reactions under plasma conditions and thus actual value of secondary electrons emitted is much more higher than expected value. Thus, proposed that the SEEC in Panchen’s law must be replaced by effective SEEC, to correctly estimate the discharge characteristics of gas such as breakdown voltage, discharge current, flux of ions and electron, electron density. Further, they proposed a method to measure effective secondary electron emission coefficient accurately and experimentally proved that existing contradiction in Pachen’s law can be addressed by proposed method. The results has been published in American Physical Society journal PHYSICS OF PLASMAS 24, 112106 (2017) with title “Effective secondary electron emission coefficient in DC abnormal glow discharge plasmas”. The authors of this paper are Saravanan Arumugam, Prince Alex, and Suraj Kumar Sinha. These results are expected ignite new research directions in electrical engineering, discharge physics and ITER-like fusion machines.",
      author: "A.Saravanan",
      place:
        "High Energy Density Batteries Research Laboratory, Dept. of Physics, Pondicherry University, Puducherry, 605014 India",
    },
  ]);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">LATEST TRENDS AND NEWS</h3>
          <hr className="line-info" />
        </div>
        <Row>
          {trends.map((item, index) => (
            <Col className="ml-auto mr-auto" md="10" xl="6" key={index}>
              <Card>
                <CardHeader>
                  <h4> {item.title}</h4>
                  <hr className="line-info" />
                </CardHeader>

                <CardBody>
                  <p>{item.content}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <div className="title">
          <h3 className="mb-3">UPDATE YOUR KNOWLEDGE</h3>
          <hr className="line-warning" />
        </div>
        <Row>
          {knowledge.map((item, index) => (
            <Col className="ml-auto mr-auto" md="10" xl="6" key={index}>
              <Card>
                <CardHeader>
                  <h4> {item.title}</h4>
                  <hr className="line-warning" />
                </CardHeader>

                <CardBody>
                  <p>{item.content}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <div className="title">
          <h3 className="mb-3">SCHOLAR CORNER</h3>
          <hr className="line-primary" />
        </div>
        <Row>
          {scholar.map((item, index) => (
            <Col className="ml-auto mr-auto" md="10" xl="6" key={index}>
              <Card>
                <CardHeader>
                  <h4> {item.title}</h4>
                  <hr className="line-primary" />
                  <h6>{item.author}</h6>
                  <small className="text-muted">{item.place}</small>
                </CardHeader>

                <CardBody>
                  <p>{item.content}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
