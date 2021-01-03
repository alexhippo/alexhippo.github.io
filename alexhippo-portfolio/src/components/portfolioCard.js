import React from "react"
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'

export const PortfolioCard = ({ content }) => {
    const { frontmatter, rawMarkdownBody } = content
    const formattedDescription = rawMarkdownBody.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``); 

    return (
        <Card className="portfolioCard" style={{ width: '10rem'}}>
            <Card.Body>
                <Card.Title>
                    {frontmatter.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Technologies used: {frontmatter.tech}
                </Card.Subtitle>
                <Card.Img src={frontmatter.thumbnail}></Card.Img>
                <Card.Text>
                    <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />            
                </Card.Text>
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