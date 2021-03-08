import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from 'gatsby'
import "@testing-library/jest-dom/extend-expect"

import Resume from "../resume"

describe("Resume", () => {
    beforeEach(() => {
        useStaticQuery
            .mockImplementation(() => ({
                "site": {
                    "siteMetadata": {
                        "title": "Test title"
                    }
                },
                experience: {
                    edges: [{
                        node: {
                            id: '1',
                            html: 'Example work experience',
                            frontmatter: {
                                company: 'Company',
                                startDate: 'July 2017',
                                endDate: 'Present',
                                title: 'Web Developer',
                                location: 'Sydney, Australia',
                                tech: 'Jest, Javascript, React Testing Library'
                            },
                            rawMarkdownBody: 'Work experience description'
                        }
                    }]
                },
                education: {
                    edges: [{
                        node: {
                            id: '2',
                            html: 'Example education experience',
                            frontmatter: {
                                school: 'University of Technology, Sydney',
                                degree: 'Bachelor of Information Technology',
                                startYear: '2010',
                                endYear: '2013'
                            },
                            rawMarkdownBody: 'Education experience description'
                        }
                    }]
                },
                community: {
                    edges: [{
                        node: {
                            id: '3',
                            html: 'Example community experience',
                            frontmatter: {
                                org: 'Bushwalking NSW',
                                startDate: 'May 2017',
                                endDate: 'April 2020',
                                title: 'Webmaster',
                                location: 'Sydney, Australia',
                                tech: 'Wordpress, HTML, CSS'
                            },
                            rawMarkdownBody: 'Community experience description'
                        }
                    }]
                }
            }))
    })

    it("displays Resume component", () => {
        const content = {
            frontmatter: {
                title: "résumé",
            },
        }

        const { getByText } = render(<Resume content={content} />)
        expect(getByText("résumé")).toBeInTheDocument();
        expect(getByText("download résumé in PDF format").closest('a')).toHaveAttribute('href', 'test-file-stub');

        expect(getByText("Experience")).toBeInTheDocument();
        expect(getByText("Company")).toBeInTheDocument();
        expect(getByText("Web Developer")).toBeInTheDocument();
        expect(getByText("Jest, Javascript, React Testing Library")).toBeInTheDocument();
        expect(getByText("Example work experience")).toBeInTheDocument();

        expect(getByText("Education")).toBeInTheDocument();
        expect(getByText("University of Technology, Sydney")).toBeInTheDocument();
        expect(getByText("Bachelor of Information Technology")).toBeInTheDocument();
        expect(getByText("Example education experience")).toBeInTheDocument();

        expect(getByText("Community & Volunteering")).toBeInTheDocument();
        expect(getByText("Bushwalking NSW")).toBeInTheDocument();
        expect(getByText("Example community experience")).toBeInTheDocument();
    })
})