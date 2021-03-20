import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import OfficeCards from "../components/OfficeCards";

const OfficeBearers = () => {
  const [members] = useState([
    {
      name: "Dr. Ramaswamy Murugan ",
      designation: "President",
      mail: "moranamurugan.phy@pondiuni.edu.in",
      number: "+0413-2654782",
      content:
        "Dr. Ramaswamy Murugan is Professor in Department of Physics, School of Physical Chemical and Applied Sciences, Pondicherry University, Puducherry, India. His research focuses on the design, synthesis and characterization of functional materials in particular for applications in energy storage, with an emphasis on understanding their intimate structure-property interplay. His major contribution is the invention of zirconium containing lithium garnet oxide as electrolyte for the all solid state lithium battery. He is an Editorial Advisory Board member in Journal IONICS (Springer) and Co-Editor Current Smart Materials (Bentham Science).",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822623086389755934/Screenshot_2021-03-20_at_5.37.31_AM.png",
    },
    {
      name: "Dr K. Ramesha",
      designation: "Secretary",
      mail: "ramesha@cecri.res.in",
      number: "+0413-2654782",
      content:
        "Dr K. Ramesha is Principal Scientist at CSIR-Central Electrochemical Research Institute (CSIR- CECRI), Chennai Unit. He obtained his Ph.D. degree from Indian Institute of Science (IISc), Bangalore in the area of Solid State and Structural Chemistry. He has collaborated with University of Maryland, University of California, Los Alamos National Laboratory. His research interest is materials for energy storage and working towards Sodium-ion, Li-Air, Li-Sulphur, all- solid-state batteries and indigenous development of Li-ion batteries for energy storage and EV applications. He is also a faculty of Academy of Scientific and Innovative Research (AScIR)",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822623088121479198/Screenshot_2021-03-20_at_5.37.37_AM.png",
    },
    {
      name: "Dr.B.M.Jaffar Ali",
      designation: "Treasurer",
      mail: "jaffarali.get@pondiuni.edu.in",
      number: "+0413-2654782",
      content:
        "Dr.B.M.Jaffar Ali is from Pondicherry University and the Head of Centre for Green Energy Technology in Madanjeet School of Green Energy Technologies. He completed his Ph.D. in Physics from Indian Institute of Science (IISc), Bangalore. He has collaborated the Weizmann Institute of Science, Israel, National Centre for Biological Sciences, Bangalore and AU-KBC Research Centre. His present area of interest are Biological Physics, Bioenergy & Biofuels, Biophotonics and Systems Biology. He has published over 40 research papers.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822623089610719273/Screenshot_2021-03-20_at_5.37.44_AM.png",
    },
    {
      name: "Dr. A S Prakash",
      designation: "Vice President - Battery Technology",
      mail: "prakash.as@gmail.com",
      number: "+0413-2654782",
      content:
        "Dr. A S Prakash is Principal Scientist at CSIR-Central Electrochemical Research Institute (CSIR- CECRI), Chennai Unit. He obtained his Ph.D. from University of Mysore in Chemistry. He has collaborated with Indian Institute of Science, Laboratoire de Réactivité et de Chimie Des Solides (France), College De France, Fraunhofer Institute for Advanced Manufacturing. He is currently leading a research group on electrochemical energy storage, with special emphasis on Li-ion batteries focusing on the fundamental understanding at materials level to high end applications like electric vehicle application.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822623091163004968/Screenshot_2021-03-20_at_5.37.49_AM.png",
    },
    {
      name: "Prof. S. Murugavel",
      designation: "Vice President – Energy Materials",
      mail: "murug@physics.du.ac.in",
      number: "+0413-2654782",
      content:
        "Prof. S. Murugavel is from Dept of Physics and Astrophysics, University of Delhi. He received his PhD from Indian Institute of Science Bangalore. He has collaborated with University of Marie-Curie – Paris, University of Muenster, Max-Planck Institute for Solid State Research, Germany. He has worked in structure and electrical transport in ion-conducting, chalcogenide, mesoporous bioactive glasses and mesostructured electrode materials. His current interest are Nano structured electrode materials for Li/Na ion batteries. Structure–property correlations in solid electrolytes, Glass and Glass–ceramics, Mesoporous bioactive glasses",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822623094992666644/Screenshot_2021-03-20_at_5.37.55_AM.png",
    },
    {
      name: "Dr. R. Arun Prasath",
      designation: "Vice President -PV Technology",
      mail: "raprasath.get@pondiuni.edu.in",
      number: "+0413-2654782",
      content:
        "Dr. R. Arun Prasath is from Centre for Green Energy Technology, Pondicherry University. He obtained his PhD in Chemical science/materials from Anna University. He has collaborated research work with Max-Planck Institute for Polymer Research, Mainz, Germany, Indian Institute of Science (IISc), University of Strathclyde, Glasgow, United Kingdom and University of New South Wales, Sydney, Australia, and Ghent University. He was a recipient of Raman postdoctoral fellowship from University Grants Commission to do research at University Of Wyoming, USA. He has over 40 publications and 3 International patents.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627131884437515/Screenshot_2021-03-20_at_5.55.56_AM.png",
    },
    {
      name: "Dr. Suraj Kumar Sinha",
      designation: "Vice President - Plama and Nuclear Energy",
      mail: "sinhasuraj.phy@pondiuni.edu.in",
      number: "+0413-2654782",
      content:
        "Dr. Suraj Kumar Sinha is from Dept of Physics, School of Physical Chemical and Applied Sciences, Pondicherry University. He received his Ph.D. from Institute for Plasma Research, Gandhinagar, India. He was at Samtel Color Limited and Birla Institute of Technology (Mesra). He was postdoctoral Raman Fellow at University of Texas Austin USA. His research focuses on the plasma based technologies especially in area of food and agriculture. His major contribution is the “Role of energetic neutrals in glow discharge plasma nitriding”, for which he was awarded “Buti Young Scientist 2005” by Plasma Science Society of India.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627134572593182/Screenshot_2021-03-20_at_5.56.00_AM.png",
    },
    {
      name: "Dr T. Maiyalagan",
      designation: "Vice President – Fuel Cells",
      mail: "maiyalagan@gmail.com",
      number: "+0413-2654782",
      content:
        "Dr T. Maiyalagan is from SRM Institute of Science and Technology. He received his Ph.D in Physical chemistry from the Indian Institute of Technology, Madras. He has collaborated with Newcastle University, Nanyang Technological University and University of Texas, Austin. . His main research interests concern development and characterization of functional nanomaterials for energy conversion and storage applications, particularly fuel cells, supercapacitors and Metal - air batteries. He has authored over research papers and edited fuel cell book in Wiley",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627135599804426/Screenshot_2021-03-20_at_5.56.05_AM.png",
    },
    {
      name: "Dr. Perumal Elumalai ",
      designation: "Vice President – Biocells",
      mail: "jelumalai.get@pondiuni.edu.in",
      number: "+0413-2654782",
      content:
        "Dr. Perumal Elumalai is from Centre for Green Energy Technology, Pondicherry University. He received his PhD from Indian Institute of Science Bangalore. He was a post-doctoral fellow at Kyushu University Japan. He was a recipient of a prestigious JSPS fellowship from Japan Society for the Promotion of Science. He has won “Special Recognition Award for Young Ceramist” by Ceramic Society of Japan for his contribution to ceramics applications. He has published over 65 research papers in reputed journals including a book chapter and holds an international patent. His areas of interest are on Batteries, Super-capacitors, Fuel Cells and Sensors.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627137206616134/Screenshot_2021-03-20_at_5.56.09_AM.png",
    },
    {
      name: "Dr. Konda Shiva",
      designation: "Vice President– Entrepreneurship in Energy Sector",
      mail: "",
      number: "+0413-2654782",
      content:
        "Dr. Konda Shiva, working as a team lead in Battery Division, Research & Advance Engineering, Renault-Nissan, Chennai. He received his PhD (2008-2013) from Indian Institute of Science, Bangalore. He was a post-doctoral fellow from Prof John B Goodenough Group, University of Texas at Austin (2014-2017). His research interests is development of functional nano-materials for energy storage applications, particularly Li-Ion and Na-Ion Batteries and Electrolyte development for All Solid State Batteries. He has published more than 15 research papers in reputed journals and holds an international patent.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627139517808680/Screenshot_2021-03-20_at_5.56.13_AM.png",
    },
    {
      name: "Dr. B. Raja",
      designation: "Vice President – BMD and Safety",
      mail: "rajab@iiitdm.ac.in",
      number: "+0413-2654782",
      content:
        "Dr. B. Raja is from IIITDM Kancheepuram. He received his PhD. from College of Engineering Guindy, Anna University. He has served in Kirloskar Copeland and GE-Aircraft Engines. His current research interests concern are thermal management of electronic devices, new product development and food processing. He has published over 25 research papers in reputed journals.",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/822627140427055124/Screenshot_2021-03-20_at_5.56.18_AM.png",
    },
  ]);

  return (
    <React.Fragment>
      <section className="section mt-5">
        <Container>
          <div className="title">
            <h3 className="mb-3">Office Bearers</h3>
            <hr className="line-info" />
          </div>
          <Row>
            {members.map((item, index) => (
              <OfficeCards key={index} item={item} />
              //   <Col md="6" key={index}>
              //     <Card className="card-coin card-plain">
              //       <CardBody>
              //         <Row>
              //           <Col md="4">
              //             <img
              //               src={item.image}
              //               alt=""
              //               className="img-fluid rounded-circle shadow-lg"
              //             />
              //           </Col>
              //           <Col md="8">
              //             <h4>{item.name}</h4>
              //             <h6>{item.designation}</h6>
              //             <a href="mailto:" className="text-info">
              //               {item.mail}
              //             </a>
              //             <small className="d-block my-2">{item.number}</small>
              //             <Button className="btn-simple" color="info">
              //               Know More
              //             </Button>
              //           </Col>
              //         </Row>
              //       </CardBody>
              //     </Card>
              //   </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default OfficeBearers;
