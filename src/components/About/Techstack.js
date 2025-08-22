import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiDatabase,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";


import { SiHtml5, SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
