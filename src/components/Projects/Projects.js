import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import farm from "../../Assets/Projects/farm-genius.png";
import typing from "../../Assets/Projects/typing-speed.png";
import weather from "../../Assets/Projects/weather-check.png";
import Codeai from "../../Assets/Projects/Code Ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing-speed"
              description="Typing Master to check real time typing speed and accuracy's during typing paragraphs. Also providing ranking according to typing speed."
              ghLink="https://github.com/anuj3124-javadev/Typemaster-speedtester"
              demoLink="https://typemaster-speedtester-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description="A responsive web application that displays current weather, 5-day forecast, and an interactive map for searched locations. This website provides information about the weather and climate in almost every country around the world"
              ghLink="https://github.com/anuj3124-javadev/weather-check"
              demoLink="https://weather-check-roan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title="farm-genius"
              description="Farm Genius empowers farmers by reducing guesswork, increasing crop productivity, saving water, and ensuring sustainable farming practices."
              ghLink="https://github.com/anuj3124-javadev/farm-genius"
              demoLink="https://farm-genius.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codeai}
              isBlog={false}
              title="Code AI"
              description="Code AI is an interactive platform designed to help learners, developers, and enthusiasts practice coding in a fun and intuitive way. ✨ Clean, modern interface with customizable themes. Pre-built coding templates for quick start. Simple “Start Coding” flow for a smooth experience"
              ghLink="https://github.com/anuj3124-javadev/Code-editor"
              demoLink="https://code-editor-theta-sandy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
