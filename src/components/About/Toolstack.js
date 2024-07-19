import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize: '1rem', padding: '0'}}>Postman</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{fontSize: '1rem', padding: '0'}}>Slack</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
