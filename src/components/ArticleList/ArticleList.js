import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './ArticleList.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          strapiId
          title
          content
        }
      }
    }
  `);
  console.log(data.allStrapiArticle);
  return (
    <section className="article-list-container__page">
      <h2>Dharmic Astrology Articles</h2>
      {data.allStrapiArticle.nodes.map(article => (
        <Link key={article.strapiId} to={`articles/${article.strapiId}`}>
          <div>
            <h2>{article.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};
