import React from 'react';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

const Article = ({ title, content, updated_at }) => {
  return (
    <article>
      <h2>{title}</h2>
      <ReactMarkdown source={content} />
      <Moment format="MMM Do YYYY">{updated_at}</Moment>
    </article>
  );
};

export default Article;
