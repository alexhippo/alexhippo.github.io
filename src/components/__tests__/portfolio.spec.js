import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from 'gatsby'
import "@testing-library/jest-dom/extend-expect"

import Portfolio from "../portfolio"

describe("Portfolio", () => {
  beforeEach(() => {
    useStaticQuery
      .mockImplementation(() => ({
        "site": {
          "siteMetadata": {
            "title": "Test title"
          }
        },
        allMarkdownRemark: {
          edges: [{
            node: {
              id: "1",
              html: "This a description of the portfolio item",
              frontmatter: {
                title: "Title of the portfolio item",
                tech: "Jest, React Testing Library, Javascript, GraphQL",
                imgAlt: "Portfolio item screenshot",
                thumbnail: {
                  childImageSharp: {
                    fluid: {
                      base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                      aspectRatio: 1,
                      src: '/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png',
                      srcSet: '/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w',
                      sizes: '(max-width: 100px) 100vw, 300px',
                    }
                  }
                },
                link: "https://alexhippo.github.io/projects/simongame/",
                github: "https://github.com/alexhippo/simongame"
              }
            }
          }]
        }
      }))
  })

  it("displays Portfolio component", () => {
    const content = {
      frontmatter: {
        title: "portfolio",
      },
      rawMarkdownBody: "Check out my recent projects"
    }

    const { getByRole, getByText, getByAltText } = render(<Portfolio content={content} />)
    expect(getByRole("heading")).toHaveTextContent("portfolio");
    expect(getByText("Check out my recent projects")).toBeInTheDocument();
    expect(getByText("Technologies used: Jest, React Testing Library, Javascript, GraphQL")).toBeInTheDocument();
    expect(getByAltText("Portfolio item screenshot")).toBeInTheDocument();
    expect(getByText("Demo").closest('a')).toHaveAttribute('href', 'https://alexhippo.github.io/projects/simongame/');
    expect(getByText("Github").closest('a')).toHaveAttribute('href', 'https://github.com/alexhippo/simongame');
  })
})