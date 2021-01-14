import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ResumeExpCard from './resumeExpCard'
import ResumeEduCard from './resumeEduCard'
import ResumeCommunityCard from './resumeCommunityCard'
import resume from '../files/AlexHipolito-WebsiteResume.pdf'

import Button from 'react-bootstrap/Button'


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
    #resume {
        width: 100%;
        float: none;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
    }
`

export const Resume = ({ content }) => {
    const { frontmatter } = content
    const data = useStaticQuery(graphql`
        {
            experience: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(resume/experience)/"}}, sort: {fields: [frontmatter___startDate], order: DESC}) {
                edges {
                    node {
                        html
                        frontmatter {
                            company
                            startDate
                            endDate
                            title
                            location
                            tech
                        }
                        rawMarkdownBody
                    }
                }
            }
            education: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(resume/education)/"}}, sort: {fields: [frontmatter___startYear], order: DESC}) {
                edges {
                    node {
                        html
                        frontmatter {
                            school
                            degree
                            startYear
                            endYear
                        }
                        rawMarkdownBody
                    }
                }
            }
            community: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(resume/community)/"}}, sort: {fields: [frontmatter___startDate], order: DESC}) {
                edges {
                    node {
                        html
                        frontmatter {
                            org
                            startDate
                            endDate
                            title
                            location
                            tech
                        }
                        rawMarkdownBody
                    }
                }
            }
        }
    `)
    const ResumeExpCards = data.experience.edges
        .filter(edge => edge.node.frontmatter.company)
        .map(edge => 
            <ResumeExpCard key={edge.node.id} content={edge.node} />
        );

    const ResumeEduCards = data.education.edges
        .filter(edge => edge.node.frontmatter.school)
        .map(edge => 
            <ResumeEduCard key={edge.node.id} content={edge.node} /> 
        );

    const ResumeCommunityCards = data.community.edges
        .filter(edge => edge.node.frontmatter.org)
        .map(edge => 
            <ResumeCommunityCard key={edge.node.id} content={edge.node} />
    );

    return (
        <StyledSection id="resume" className="rowComponent">
            <h2 className="subtitle">
                {frontmatter.title}
            </h2>
            <div className="downloadResume">
                <Button download href={resume} size="lg" variant="secondary" className="downloadResume">Download {frontmatter.title} in PDF format</Button>
            </div>
            <div className="description">
                <h3>Experience</h3>
                {ResumeExpCards}
                <h3>Education</h3>
                {ResumeEduCards}
                <h3>Community &amp; Volunteering</h3>
                {ResumeCommunityCards}
            </div>
        </StyledSection>
    ) 
}

Resume.propTypes = {
    content: PropTypes.object,
}

export default Resume