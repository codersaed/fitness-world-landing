import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../media/fitnesslogo.png";
import "./style.css"

const NavP = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="" style={{color: 'white'}}><img style={{width: '170px',}} src={logo}/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="navA" href="">Home</Nav.Link>
            <Nav.Link className="navA" href="">About</Nav.Link>
            <Nav.Link className="navA" href="">Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavP;
