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
        text-align: center;
        color: #fff;
    }
    a {
        text-decoration: underline;
    }
    .description {
        width: 100%;
        float: none;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
        text-align: center;
    }
`

export const Portfolio = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    const formattedDescription = rawMarkdownBody.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``); 

    return (
        <StyledSection id="portfolio" className="rowComponent">
            <h2 className="subtitle">
                {frontmatter.title}
            </h2>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />            
            </div>
        </StyledSection>
    ) 
}

Portfolio.propTypes = {
    content: PropTypes.object,
}

export default Portfolio