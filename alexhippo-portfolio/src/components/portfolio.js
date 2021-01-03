import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import PortfolioCard from "./portfolioCard"
import CardDeck from 'react-bootstrap/CardDeck'

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

    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolioSamples)/"}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            tech
                            link
                            github
                        }
                            rawMarkdownBody
                        }
                    }
            }
        }
    `)
    const PortfolioCards = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.title)
        .map(edge => <PortfolioCard key={edge.node.id} content={edge.node} /> )

    return (
        <StyledSection id="portfolio" className="rowComponent">
            <h2 className="subtitle">
                {frontmatter.title}
            </h2>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />            
            </div>
            <CardDeck>
                {PortfolioCards}
            </CardDeck>
        </StyledSection>
    ) 
}

Portfolio.propTypes = {
    content: PropTypes.object,
}

export default Portfolio