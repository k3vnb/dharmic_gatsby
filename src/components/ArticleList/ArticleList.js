import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ArticleListCard from './ArticleListCard';
import './ArticleList.css';
import Article from './Article';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      cosmic: file(relativePath: { eq: "greg-rakozy-cosmic.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            src
          }
        }
      }
      allStrapiArticle {
        nodes {
          strapiId
          title
          content
          synopsis
          thumbnail {
            childImageSharp {
              fixed(width: 150) {
                src
              }
            }
          }
        }
      }
    }
  `);
  console.log(data.allStrapiArticle)
  return (
    <section className="article-list__page">
      <h2 className="article-list__page-title ">
        Dharmic Astrology Blog Articles
      </h2>
      <div className="article-list__container">
        {data.allStrapiArticle.nodes.map(
          ({ strapiId, thumbnail, title, synopsis }) => (
            <ArticleListCard
              key={strapiId}
              thumbnail={
                thumbnail
                  ? thumbnail.childImageSharp.fixed.src
                  : data.cosmic.childImageSharp.fixed.src
              }
              strapiId={strapiId}
              title={title}
              synopsis={synopsis}
            />
          )
        )}
      </div>
    </section>
  );
};
