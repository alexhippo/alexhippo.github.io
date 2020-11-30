import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      <About content={data.about.edges[1].node} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            subtitleSuffix
          }
          rawMarkdownBody
        }
      }
    }
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            about
          }
          rawMarkdownBody
        }
      }
    }
  },
`

