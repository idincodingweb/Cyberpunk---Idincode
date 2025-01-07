import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/style/About.css';
import ImageOne from '../assets/images/next8.jpg';
import ImageTwo from '../assets/images/bg2.jpg';
import ImageThree from '../assets/images/7.jpg';

const About = () => {
  // Array of team members with their respective images
  const teamMembers = [
    { id: 1, image: ImageOne, name: "Cyber Punk", position: "Development" },
    { id: 2, image: ImageTwo, name: "Hacker", position: "Backend" },
    { id: 3, image: ImageThree, name: "CyberPunk", position: "Designer" }
  ];

  return (
    <Container className="About py-5">
      <Row className="mb-5">
        <Col xs={12} className="text-center">
          <h1 className="display-3 fw-bold cyberpunk-gradient mb-4">ABOUT_US</h1>
          <div className="neon-line mx-auto"></div>
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row className="mb-5 g-4">
        <Col md={6}>
          <Card className="card-cyberpunk h-100">
            <Card.Body className="p-4">
              <h2 className="cyberpunk-gradient h3 mb-4">Our Mission</h2>
              <p className="text-light opacity-75">
                We are dedicated to pushing the boundaries of digital innovation and creating 
                cutting-edge solutions that transform the way people interact with technology.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-cyberpunk h-100">
            <Card.Body className="p-4">
              <h2 className="cyberpunk-gradient h3 mb-4">Our Vision</h2>
              <p className="text-light opacity-75">
                To lead the digital revolution by developing innovative solutions that 
                empower individuals and organizations in an increasingly connected world.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col xs={12} className="text-center mb-4">
          <h2 className="cyberpunk-gradient h2">Our Team_</h2>
          <div className="neon-line mx-auto"></div>
        </Col>
        {teamMembers.map((member) => (
          <Col md={4} className="mb-4" key={member.id}>
            <Card className="card-cyberpunk text-center">
              <Card.Body className="p-4">
                <div className="team-member-img mb-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-member-photo"
                  />
                </div>
                <h3 className="h4 cyberpunk-gradient">{member.name}</h3>
                <p className="text-light opacity-75">{member.position}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Contact Section */}
      <Row>
        <Col xs={12}>
          <Card className="card-cyberpunk">
            <Card.Body className="p-5 text-center">
              <h2 className="cyberpunk-gradient h2 mb-4">Connect_With_Us</h2>
              <p className="text-light opacity-75 mb-4">
                Ready to join the future? Get in touch with our team.
              </p>
              <Button className="btn-cyberpunk btn-lg px-5">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;