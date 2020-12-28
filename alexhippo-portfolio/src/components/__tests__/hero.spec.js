import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import Hero from "../hero"

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

describe("Hero", () => {
  it("renders correctly", () => {
    const content = {
        "frontmatter": {
            "title": "I'm Alex.",
            "greetings": "Hello, kumusta ka?",
            "subtitlePrefix": "I ",
            "subtitleHighlight": "build, test and deliver."
          }
    };

    const tree = renderer
      .create(<Hero content={content} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})