import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import cdli from "../../Assets/Projects/CDLI Logo.png";
import vesit from "../../Assets/Projects/vesit.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                    imgPath={cdli}
                    isBlog={false}
                    title="Student Contributor in Google Summer of Code 2022 at Cuneiform Digital Library Initiative"
                    description="My project aimed at adding new features to the CDLI framework and enhancing the usability of some of the pre-existing features. Also wrote documentation for the features."
                    demoLink="https://summerofcode.withgoogle.com/programs/2022/projects/pDQYTu4a"          
                  />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                    imgPath={vesit}                    
                    title="Web Development Intern at VESIT Renaissance Cell (2021)"
                    description="Worked as a web development intern to create a website using React for learning vedic mathematics along with a team."
                    ghLink="https://github.com/Shivoham102/vedic-math-web-app"          
                  />
            </Col>
          </Row>
        </Container>

        <h1 className="project-heading">
          <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
