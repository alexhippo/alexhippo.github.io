import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        text-align: center;
    }
    .subtitle {
        margin-top: 0;
    }
`

const About = ({ content }) => {
    const { frontmatter } = content
    return (
        <StyledSection id="about">
            <h2 className="subtitle">
                {frontmatter.about}
            </h2>
            <div className="description">
                <p>{frontmatter.description}</p>
            </div>
        </StyledSection>
    )
}

export default About