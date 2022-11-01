import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import  profile_img  from "../assets/img/Sumeet-Sharma.JPG";

function Banner() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <Card className="border-0" align="start">
                        <Card.Body className="py-5 px-3">
                            <p>Hello there, I am</p>
                            <h1 className="h1-responsive pb-1">Sumeet Sharma</h1>
                            <h6 className="h6-responsive">Fullstack Developer at EduHubSPot</h6>
                            <p className="py-1 about-me">
                                Graduated as an Engineer in Information Technology from the University of Mumbai 
                                I have always had a keen interest in developing website/web applications using the technologies 
                                I learned from time to time. 
                            </p>
                            <p className="about-me">
                                It has helped me in analyzing the issues in websites/applications 
                                and providing necessary recommendations to the
                                client to make the design look neat and appealing for the target audience. 
                            </p>
                            <p className="about-me">
                                Apart from developing websites I also like to draw as a part of my leisure time which helps me calm my mind and utilize my creative side
                            </p>
                            <Button variant="dark" size="lg">
                                Know More
                            </Button>
                        </Card.Body>
                    </Card> 
                </Col>
                <Col sm>
                    <Card className="border-0">
                        <Card.Body>
                            <img src={profile_img} className="img-fluid p-4 profile-img" alt="Sumeet Sharma" />
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Banner