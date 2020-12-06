import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #efc3a4;
    }
`

const Hero = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    return (
        <StyledSection id="hero">
            <h1 className="title">
                {frontmatter.greetings}{" "} 
                <br />
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
    )
}

Hero.propTypes = {
    content: PropTypes.any 
}

export default Hero