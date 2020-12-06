import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        text-align: center;
    }
    .subtitle {
        margin-top: 0;
    }

    a{
        text-decoration: underline;
    }
`

const About = ({ content }) => {
    console.log(content);
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

About.propTypes = {
    content: PropTypes.object
}

export default About