import React from "react"
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'
import Img from 'gatsby-image'

export const PortfolioCard = ({ content }) => {
    const { frontmatter, html } = content

    return (
        <Card className="portfolioCard">
            <Card.Body>
                <Card.Title>
                    {frontmatter.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Technologies used: {frontmatter.tech}
                </Card.Subtitle>
                <Img
                    fluid={frontmatter.thumbnail.childImageSharp.fluid}
                    alt={frontmatter.imgAlt}
                    aria-label={frontmatter.title}
                    style={{
                        marginBottom: '10px'
                    }}
                />
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Card.Link href={frontmatter.link}>Demo</Card.Link>
                <Card.Link href={frontmatter.github}>Github</Card.Link>
            </Card.Body>

        </Card>
    )
}

PortfolioCard.propTypes = {
    content: PropTypes.object,
}

export default PortfolioCard