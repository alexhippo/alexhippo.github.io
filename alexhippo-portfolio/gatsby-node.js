exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    // query for all markdown
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/about.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  }