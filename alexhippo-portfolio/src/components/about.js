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
    const { frontmatter, rawMarkdownBody } = content
    const formattedDescription = rawMarkdownBody.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``) 
    return (
        <StyledSection id="about">
            <h2 className="subtitle">
                {frontmatter.about}
            </h2>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </div>
        </StyledSection>
    )
}

export default About