import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import events from "../../Assets/Projects/events.png";
import jewelry from "../../Assets/Projects/jewelry.png";
import graph from "../../Assets/Projects/graphql-go.png";

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
              imgPath={graph}
              isBlog={false}
              title="graphql/graphql-go"
              description="A web-page implementation of GraphQL for Go based on Docusaurus. Here you could find the entire documentation of them and the updates in a versioning. Easily to use and interact directly with GitHub."
              link="https://github.com/graphql-go/graphql-go.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="Event's Management dApp"
              description="Basic dApp where you could create an event and interact with metamask. It based on Solidity, Ethers.js and Hardhat"
              link="https://github.com/LuisIzarra/events-management-dapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewelry}
              isBlog={false}
              title="Lulú's Jewelry"
              description="This project is about a peruvian's branch of jewelry, you can see their products and contact them directly to buy. This web page is based on HTML and CSS."
              link="https://github.com/LuisIzarra/lulu-jewelry/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
