import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/pfp.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// function Home2() {
const Home2 = React.forwardRef((props, ref) => {
  return (
    <Container fluid className="home-about-section" id="about" ref={ref}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              An <span className="purple"> Overview </span>
            </h1>
            <p className="home-about-body">
              As a computer science graduate, I bring a robust skill set combined with creativity and passion. I love working in <span className="purple"> open source</span> and <span className="purple"> Web3</span> projects, and have worked on projects that impacted users globally.                          
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">Connect</span> with Me</h1>            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shivoham102"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://gitlab.com/shivohamangal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivohamangal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/Shivoham102/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>         
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
})
export default Home2;
