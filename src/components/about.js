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
    .profile-image {
        @media (min-width: 1200px) {
            max-width: 250px;
        }
        max-width: 180px;
    }
`

export const About = ({ content }) => {
    const { frontmatter, html } = content

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "profileimage.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
        }
    `)

    return (
        <StyledSection id="about" className="rowComponent">
            <h2 className="subtitle" id="about_heading">
                {frontmatter.about}
            </h2>
            <div className="description">
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="Profile image of Alex Hipolito"
                    aria-label="Profile image of Alex Hipolito"
                    style={{
                        borderRadius: '180px',
                        margin: '0 auto 10px'
                    }} />
                <div dangerouslySetInnerHTML={{ __html: html }} />

            </div>
        </StyledSection>
    )
}

About.propTypes = {
    content: PropTypes.object,
}

export default About