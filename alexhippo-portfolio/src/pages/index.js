import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Resume from "../components/resume"
import Contact from "../components/contact"

import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = ({data}) => {
  return (
    <Layout>
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
  hero: allMarkdownRemark(filter: {frontmatter: {title: {eq: "I'm Alex."}}}) {
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
  portfolio: allMarkdownRemark(filter: {frontmatter: {title: {eq: "portfolio"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
  resume: allMarkdownRemark(filter: {frontmatter: {title: {eq: "résumé"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
  contact: allMarkdownRemark(filter: {frontmatter: {title: {eq: "contact"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
}
`
