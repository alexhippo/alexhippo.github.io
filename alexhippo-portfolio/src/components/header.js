import React from "react"
import styled from "styled-components"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const StyledLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
  font-family: 'Miriam Libre', sans-serif;
  padding-right: 20px;
  &hover: {color: black;}
`

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar" sticky="top" role="navigation" id="header">
      <StyledLogo>
        <Nav.Link href="/">alexhipolito</Nav.Link>
      </StyledLogo>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#portfolio">portfolio</Nav.Link>
          <Nav.Link href="#resume">résumé</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header