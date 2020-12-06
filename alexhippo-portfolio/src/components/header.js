import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
  font-family: 'Miriam Libre', sans-serif;
`

const StyledSpan = styled.span`
  padding-right: 10px;
  padding-left: 10px;
  white-space: pre;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="Homepage">
        <StyledLogo>alexhipolito</StyledLogo>
      </Link>
      <Link to="/" aria-label="About me">
        <StyledSpan>about</StyledSpan>
      </Link>
      <Link to="/" aria-label="CV">
        <StyledSpan>cv</StyledSpan>
      </Link>
      <Link to="/" aria-label="Portfolio">
        <StyledSpan>portfolio</StyledSpan>
      </Link>
      <Link to="/" aria-label="Contact">
        <StyledSpan>contact</StyledSpan>
      </Link>
    </StyledHeader>
  )
}

export default Header