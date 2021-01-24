import React from "react"
import PropTypes from 'prop-types'

export const ResumeEduCard = ({ content }) => {
    const { html, frontmatter } = content

    return (
        <div>
            <div className="titles">
                <h4 className="companyTitle">
                    {frontmatter.school}
                </h4>
                <span className="personalTitle">
                    {frontmatter.degree}
                </span>
            </div>
            <div className="date">
                <h5>
                   {frontmatter.startYear} - {frontmatter.endYear}
                </h5>
            </div>
            <p dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    ) 
}

ResumeEduCard.propTypes = {
    content: PropTypes.object,
}

export default ResumeEduCard