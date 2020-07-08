import React from 'react';

const Article = ({ title, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>{content}</div>
    </article>
  );
};

export default Article;
