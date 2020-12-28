import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        color: white;
    }
    .subtitle {
        margin-top: 0;
        color: white;
    }
    .highlighted {
        
    }
`

const Hero = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    return (
        <Jumbotron fluid id="hero">
            <Container>
                <StyledSection>
                    <h1 className="title">
                        {frontmatter.greetings}{" "} 
                        {frontmatter.title}
                    </h1>
                    <h2 className="subtitle">
                        {frontmatter.subtitlePrefix}{" "}
                        <span className="highlighted">{frontmatter.subtitleHighlight}</span>&nbsp;
                    </h2>
                    <div className="description">
                        {rawMarkdownBody}
                    </div>
                </StyledSection>
            </Container>
        </Jumbotron>
    )
}

Hero.propTypes = {
    content: PropTypes.any 
}

export default Hero