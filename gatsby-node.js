/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  graphql(`
    {
      allStrapiArticle {
        nodes {
          id
          title
          content
        }
      }
      allStrapiPackageItem {
        nodes {
          strapiId
          price
          title
          description
          picture {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const allArticles = result.data.allStrapiArticle.nodes;
    const allPackageItems = result.data.allStrapiPackageItem.nodes;
    allArticles.forEach(({ id, title, content }) => {
      createPage({
        path: `/articles/${id}`,
        component: require.resolve('./src/templates/article'),
        context: {
          id,
          title,
          content
        }
        ,
      })
    })
    allPackageItems.forEach(({ strapiId, title, description, price, picture }) => {
      createPage({
        path: `/package/${strapiId}`,
        component: require.resolve('./src/templates/package'),
        context: {
          strapiId,
          title,
          description,
          price,
          picture
        }
        ,
      })
    })
  });
};
