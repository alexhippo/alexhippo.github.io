import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Resume from "../components/resume"
import Contact from "../components/contact"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Hero content={data.hero.edges[0].node} />
      <About content={data.about.edges[0].node} />
      <Portfolio content={data.portfolio.edges[0].node} />
      <Resume content={data.resume.edges[0].node} />
      <Contact content={data.contact.edges[0].node} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any
}

export default IndexPage

export const query = graphql`
{
  hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(hero.md)/"}}) {
    edges {
      node {
        frontmatter {
          title
          greetings
          subtitle
        }
      }
    }
  }
  about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(about.md)/"}}) {
    edges {
      node {
        html
        frontmatter {
          about
        }
        rawMarkdownBody
      }
    }
  }
  portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio.md)/"}}) {
    edges {
      node {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
  resume: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(resume.md)/"}}) {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(contact.md)/"}}) {
    edges {
      node {
        html
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
}
`
