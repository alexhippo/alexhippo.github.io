import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        text-align: center;
    }
    .subtitle {
        margin-top: 0;
        text-align: center;
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
    }
`

export const About = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    const formattedDescription = rawMarkdownBody.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``); 

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "profileimage.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 250, quality: 89) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
        }
    `)

    return (
        <StyledSection id="about" className="rowComponent">
            <h2 className="subtitle">
                {frontmatter.about}
            </h2>
            <div className="description">
                <Img 
                    fluid={data.file.childImageSharp.fluid} 
                    alt="Profile image of Alex Hipolito" 
                    aria-label="Profile image of Alex Hipolito" 
                    style={{
                        borderRadius: '200px',
                        margin: '0 auto 10px'
                }} />
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />            
            </div>
        </StyledSection>
    ) 
}

About.propTypes = {
    content: PropTypes.object,
}

export default About