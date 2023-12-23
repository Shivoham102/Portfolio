import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gsr from "../../Assets/Projects/GSR.png";
import platformer from "../../Assets/Projects/3dplatformer.png";
import blog from "../../Assets/Projects/blog.png";
import discordbot from "../../Assets/Projects/discordbot.png";
import aura from "../../Assets/Projects/aura.png";
import vedic from "../../Assets/Projects/vedic.png";
import gsoctalk from "../../Assets/Projects/gsoctalk.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsr}
              isBlog={false}
              title="Gujarati Script Recognition"
              description="A project for creating a digital library of the Gujarati language Newspapers by extracting text from images and saving in text format."
              demoLink="https://colab.research.google.com/drive/1J791i6JE1vxXo__5fAIf0-IDvaDAAMGe?usp=sharing"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={platformer}
              isBlog={false}
              title="3D Platformer"
              description="A 3D platformer game with features like menu screens, level unlocking, saves, sound effects and high score system."
              ghLink="https://github.com/Shivoham102/3D-Platformer"           
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordbot}
              isBlog={false}
              title="Discord Quiz Bot"
              description="A simple discord bot that uses open trivia API. The bot has 2 types of questions - True/False and MCQ type questions. The bot was made in Repl.it and hosted on UptimeRobot."
              ghLink="https://github.com/Shivoham102/Discord-Quiz-Bot"
              demoLink="https://replit.com/@ShivohamAngal/Quiz-Bot#main.py"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aura}
              isBlog={false}
              title="Aura Imaging"
              description="A research-based project attempting to devise a cheap software solution to visualize aura of a person and derive health-based conclusions. The project involved formulating and implementing ways to manipulate images and get an aura image."            
              demoLink="https://colab.research.google.com/drive/1DFuC5fMBUIM7nUahmlSb2gJ_GbcWF839?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vedic}
              isBlog={false}
              title="Vedic Maths Website"
              description="A website created to teach vedic maths sutras to children supported with animated videos. Questionnaire page for practicing questions."
              ghLink="https://github.com/Shivoham102/vedic-math-web-app"          
            />
          </Col>
                  
        </Row>

        <h1 className="project-heading">
          Noteworthy <strong className="purple">Achievements </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gsoctalk}          
                title="The GSoC Talk"
                description="Conducted a concise talk on Google Summer of Code (GSoC) to a group of 50 juniors during Hacktoberfest by CodeCell VESIT 2022, empowering them to contribute to open source while demonstrating strong communication skills."          
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Google Summer of Code 2022 Blog"
              description="The blog I wrote daily during my role as a Student Contributor in Google Summer of Code 2022 at Cuneiform Digital Library Initiative. My project was titled New Features and Usability Enhancement."
              demoLink="https://cdli-gh.github.io/blog/gsoc22/NewFeaturesAndUsabilityEnhancement/index"          
            />
          </Col>        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
