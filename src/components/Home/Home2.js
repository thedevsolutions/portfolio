import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              <b className="purple">The DevSolutions </b> is a software
              development company based in Lahore, Pakistan that is devoted to
              providing innovative software solutions to startups, SMBs, and
              large enterprises. Partnering with us will help you obtain a
              competitive edge in the market through high-quality custom
              development services. The most influential design, business, and
              technology talents that exist in the business will be made
              available to you. You demonstrate your idea and together we will
              learn about the right audiences, test solutions, and execute them
              based on the right standards. I and excelled in{" "}
              <b className="purple">
                programming, mathematics, natural sciences, data analysis,
                electronics, and problem solving{" "}
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/beebus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/michael-beebower/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
