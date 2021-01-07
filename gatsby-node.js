const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    const serverPage = path.resolve('./src/templates/server-page.template.js')
    resolve(
      graphql(
        `
        {
          allContentfulServer {
            edges {
              node {
                serverName
                slug
                mapUrl
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulServer.edges
        posts.forEach((server, index) => {
          createPage({
            path: `/server/${server.node.slug}/`,
            component: serverPage,
            context: {
              slug: server.node.slug
            },
          })
        })
      })
    )


    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
