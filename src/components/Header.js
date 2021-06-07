import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <h1 style={{ fontFamily: "Montserrat", color: '#fff5eb', fontSize: '75px'}}> <spna style={{fontSize: '70px', paddingBottom: '12px'}}>Fitness</spna> <br/> And Gym</h1>
        <p style={{ fontFamily: "Montserrat", color: 'white', width: '45%', fontSize: '17px', paddingTop: '8px' }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="icon">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
