import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"

import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      <About content={data.about.edges[0].node} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any
}

export default IndexPage

export const query = graphql`
{
  hero: allMarkdownRemark(filter: {frontmatter: {title: {eq: "I'm Alex Hipolito."}}}) {
    edges {
      node {
        frontmatter {
          title
          greetings
          subtitlePrefix
          subtitleHighlight
        }
      }
    }
  }
  about: allMarkdownRemark(filter: {frontmatter: {about: {eq: "a little bit about me"}}}) {
    edges {
      node {
        frontmatter {
          about
        }
        rawMarkdownBody
      }
    }
  }
}
`
