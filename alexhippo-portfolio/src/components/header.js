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
  &hover: {color: black}
`

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top" role="navigation" id="header">
      <StyledLogo>
        <Nav.Link href="#hero">alexhipolito</Nav.Link>
      </StyledLogo>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about" style={{color: '#000'}}>about</Nav.Link>
          <Nav.Link href="#portfolio" style={{color: '#000'}}>portfolio</Nav.Link>
          <Nav.Link href="#resume" style={{color: '#000'}}>résumé</Nav.Link>
          <Nav.Link href="#contact" style={{color: '#000'}}>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header