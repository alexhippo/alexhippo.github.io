import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import About from "../about"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Alex Hipolito | Web Development, Test Automation, Agile Delivery`,
        }
      }
    })
  )
})

describe("About", () => {
  it("renders correctly", () => {
    const content = {
      frontmatter: {
        "about": "a little bit about me"
      },
      rawMarkdownBody: "I'm a Australian Filipino Web Developer and QA Engineer based in Sydney with over 7 years of experience in coding, testing and delivering core features to apps millions of Australians use everyday.\r\n\r\nMy extensive background in Digital, Media and Video Streaming services enables me to understand the problem as well as collaborate with teams to find and implement a high quality solution. I build and maintain end-to-end web and integration test automation suites from scratch, empowering teams to deliver features faster and with confidence. I am also an advocate for Web Accessibility, testing and contributing to code to comply with WCAG AA standards to help ensure that the web is accessible to all. Whenever I have a spare moment, I also code and ship bugfixes.\r\n\r\nI am currently working at an Aussie broadcaster, SBS (Special Broadcasting Service). My main focus is on the website and APIs supporting the flagship video streaming platform, <a href=\"https://www.sbs.com.au/ondemand\" aria-label=\"SBS On Demand\">SBS On Demand</a>, which is available on a range of Web, Mobile, Smart TVs and Set Top Box platforms and serves over 11000+ hours of content to over 1 million active viewers per month. \r\n \r\nOutside of digital life you can find me either running, training for some sort of fitness event, cooking or attempting to electro shuffle."
    }

    const data = {
      "file": {
        "childImageSharp": {
          "fixed": {
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAQb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAaJLMjS6Y85SUaFZ/wD/xAAbEAACAwADAAAAAAAAAAAAAAABAgADEhAhIv/aAAgBAQABBQK3xWmlfMssTCMFml4J2UPX/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQMBAT8BxjJr/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQIBAT8B0oUf/8QAGxAAAQUBAQAAAAAAAAAAAAAAAQACEBExEiL/2gAIAQEABj8Csam+ug6NQ6K2LMf/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUEQUXH/2gAIAQEAAT8hag5YJ2jU3zwWjZ19l5ak6S6Ld+o67cR++z//2gAMAwEAAgADAAAAEJD4v//EABkRAQACAwAAAAAAAAAAAAAAAAABMREhUf/aAAgBAwEBPxDUrDqibf/EABkRAQACAwAAAAAAAAAAAAAAAAAhMQERUf/aAAgBAgEBPxCYNuLMU//EAB0QAQADAQACAwAAAAAAAAAAAAEAESExQWFRcbH/2gAIAQEAAT8QNtYMlhfmZVAilW8YhbqLTkCG6yCHF0liPfmtlayx6Ihdm0J9yoK5xlZw9QOfJ+z/2Q==",
            "aspectRatio": 1,
            "src": "/static/e5419b685f0a01122d682769317c5f0a/3b88a/profileimage.jpg",
            "srcSet": "/static/e5419b685f0a01122d682769317c5f0a/3b88a/profileimage.jpg 1x,\n/static/e5419b685f0a01122d682769317c5f0a/cd8c9/profileimage.jpg 1.5x"
          }
        }
      }
    }
  
    const tree = renderer
      .create(<About content={content} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})