import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiGoogleCloudPlatform
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiCakephp,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: '1rem', padding: '0'}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p style={{fontSize: '1rem', padding: '0'}}>PHP</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: '1rem', padding: '0'}}>JavaScript</p>
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: '1rem', padding: '0'}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: '1rem', padding: '0'}}>React.js</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: '1rem', padding: '0'}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCakephp />
        <p style={{fontSize: '1rem', padding: '0'}}>CakePHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{fontSize: '1rem', padding: '0'}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: '1rem', padding: '0'}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{fontSize: '1rem', padding: '0'}}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <p style={{fontSize: '1rem', padding: '0'}}>Google Cloud</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{fontSize: '1rem', padding: '0'}}>PostgreSQL</p>
      </Col> 
    </Row>
  );
}

export default Techstack;
