import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
       <span role="img" aria-label="copyright">©️</span>
       &nbsp;
       Alex Hipolito {(new Date().getFullYear())}.

       Made with&nbsp;<span role="img" aria-label="love" alt="love emoji">💖</span>&nbsp;and&nbsp;<span role="img" aria-label="coffee" alt="coffee emoji">☕</span>
  </StyledFooter>
)

export default Footer