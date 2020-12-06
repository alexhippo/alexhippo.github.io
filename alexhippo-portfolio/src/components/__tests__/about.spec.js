import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import About from "../about"

describe("About", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Alex Hipolito | Web Development, Test Automation, Agile Delivery`,
          },
        },
      })
    )
  })

  it("renders correctly", () => {
    const data = {
      frontmatter: {
        "about": "about"
      },
      rawMarkdownBody: "I'm a developer with 7+ years of experience in web development, test automation, business analysis and agile delivery.\r\n\r\nMy extensive background in Digital, Media and Video Streaming services enables me to understand the problem as well as collaborate with others to find and implement a solution (with tests!) I have built and maintained e2e web and integration test automation suites from scratch, empowering teams to deliver features faster and with confidence. I have experience in implementing and testing for WCAG 2.1 AA Standard Accessibility.\r\n\r\nIn my spare time I also enjoy coding side projects, see my portfolio below.\r\n\r\nI am currently working at Special Broadcasting Service (SBS) on their flagship video streaming platform, SBS On Demand, which serves over 1 million active users per month. \r\n \r\nOutside of work I am an avid runner and enjoy most things fitness and food."
    }
    // console.log(...data.about.edges[0].node);
    const tree = renderer
      .create(<About {...data}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})