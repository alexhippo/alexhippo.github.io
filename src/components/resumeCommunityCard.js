import React from "react"
import PropTypes from 'prop-types'

export const ResumeCommunityCard = ({ content }) => {
    const { html, frontmatter } = content
    const dateFormat = (date) => {
        if (date == "Present") {
            return date;
        } else {
            let newDate = new Date(date.split('-'));
            newDate = newDate.toLocaleString('default', { month: 'long', year: 'numeric' });
            return newDate;
        }
    }

    const startDate = dateFormat(frontmatter.startDate);
    const endDate = dateFormat(frontmatter.endDate);

    return (
        <div>
            <div className="titles">
                <h4 className="companyTitle">
                    {frontmatter.org}
                </h4>
                <span className="personalTitle">
                    {frontmatter.title}
                </span>
            </div>
            <div className="date">
                <h5>
                    {startDate} - {endDate}
                </h5>
            </div>
            <h6>
                {frontmatter.tech}
            </h6>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>


    )
}

ResumeCommunityCard.propTypes = {
    content: PropTypes.object,
}

export default ResumeCommunityCard