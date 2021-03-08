import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import heroSVG from '../images/heroimage.svg'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        color: white;
        font-weight: 700;
        text-align: center;
        display: block;
    }
    .subtitle {
        margin-top: 0;
        color: white;
        font-weight: 500;
        text-align: center;
    }
    #hero > svg {
        display: block;
      }
    
`

const Hero = ({ content }) => {
    const { frontmatter } = content
    return (
        <Jumbotron fluid id="hero">
            <Row className="align-items-center align-self-center justify-content-center">
                <Col>
                    <StyledSection>
                        <div>
                            <h1 className="title display-4">
                                {frontmatter.greetings}{" "}{frontmatter.title}
                            </h1>
                            <h2 className="subtitle display-5">
                                {frontmatter.subtitle}
                            </h2>
                        </div>
                    </StyledSection>
                </Col>
                <Col>
                    <div className="heroImage">
                        <img src={heroSVG} alt="Fixing software bugs illustration from Undraw" />
                    </div>
                </Col>
            </Row>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                <path fill="#fff" fillOpacity="1" d="M0,32L60,32C120,32,240,32,360,58.7C480,85,600,139,720,165.3C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </Jumbotron>

    )
}

Hero.propTypes = {
    content: PropTypes.any
}

export default Hero