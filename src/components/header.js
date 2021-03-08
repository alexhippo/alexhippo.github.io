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

  const scrollToView = (id) => {
    let target = document.getElementById(id);
    target.scrollIntoView(true);
    target.focus();
    if (document.activeElement === target) {
      return false;
    } else {
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  };

  return (
    <Navbar expand="lg" className="navbar" fixed="top" role="navigation" id="header">
      <StyledLogo>
        <Nav.Link onClick={() => scrollToView('hero')}>alexhipolito</Nav.Link>
      </StyledLogo>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => scrollToView('about_heading')} style={{ color: '#000' }}>about</Nav.Link>
          <Nav.Link onClick={() => scrollToView('portfolio_heading')} style={{ color: '#000' }}>portfolio</Nav.Link>
          <Nav.Link onClick={() => scrollToView('resume_heading')} style={{ color: '#000' }}>résumé</Nav.Link>
          <Nav.Link onClick={() => scrollToView('contact_heading')} style={{ color: '#000' }}>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header