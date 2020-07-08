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
    }
  `).then(result => {
    const allArticles = result.data.allStrapiArticle.nodes;
    console.log({ allArticles })
    allArticles.forEach(({ id, title, content }) => {
      createPage({
        path: `/articles/strapi/${id}`,
        component: require.resolve('./src/templates/article'),
        context: {
          id,
          title,
          content
        }
        ,
      })
    })
  });
};
