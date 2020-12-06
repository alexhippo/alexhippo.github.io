import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"

const StyledImage = styled(Img)`
  profileImage{
    borderRadius: 100px,
  }
`


const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      <About content={data.about.edges[0].node} />
      <StyledImage 
        fixed={data.file.childImageSharp.fixed} 
        alt="Profile image of Alex Hipolito" 
        aria-label="Profile image of Alex Hipolito" 
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          borderRadius: '200px',
        }} />
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
  file(relativePath: {eq: "profileimage.jpg"}) {
    childImageSharp {
      fixed(
        width: 300, 
        height: 300, 
        quality: 89,  
      ) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}
`
