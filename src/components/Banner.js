import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import myprofile  from "../assets/img/sumeet_sharma-home.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const styles= {
    profile_img: {
        width: "200px",
        height: "200px",
        borderRadius: "50%"
    },

    social_links: {
        fontSize: "26px",
        margin: "15px 7.5px",
        color: "#333",

    }
}

function Banner() {
    return (
        <div className="bg-dark py-4">
            <Container className="my-4">
                <Card className="my-5 py-5 border-0">
                    <Card.Body>
                        <img src={ myprofile } style={ styles.profile_img } alt="Sumeet Sharma" />
                        <h1 className="pt-4">Sumeet Dilip Sharma</h1>
                        <div className="social">
                            <a href="https://facebook.com/itsumeet/" style={ styles.social_links }><FaFacebook /></a>
                            <a href="https://linkedin.com/itsumeet/" style={ styles.social_links }><FaLinkedin /></a>
                            <a href="https://instagram.com/itsumeet27/" style={ styles.social_links }><FaInstagram /></a>
                            <a href="https://twitter.com/itsumeet27/" style={ styles.social_links }><FaTwitter /></a>
                            <a href="https://github.com/itsumeet27/" style={ styles.social_links }><FaGithub /></a>
                        </div>
                        <div className="py-4">
                            <Link to="/about" className="nav-link"><Button variant="dark" size="lg">Know More</Button></Link>
                        </div>                        
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Banner