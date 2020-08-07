import React from 'react';
import { Link } from 'gatsby';

export default ({ thumbnail, strapiId, title, synopsis }) => (
  <article className="article-list__card">
    <div className="article-list__card-thumbnail--container flex-center" style={{ backgroundImage: `url(${thumbnail})`}}>
      <img src={thumbnail} className="article-list__card-thumbnail" alt={`${title} image`} />
    </div>
    <div className="article-list__card-text">
      <Link to={`/articles/${strapiId}`}>
        <h3>{title}</h3>
      </Link>
      <p>{synopsis}</p>
    </div>
  </article>
);
