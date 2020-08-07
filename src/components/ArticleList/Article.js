import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

const Article = ({ title, content, updated_at }) => {
  return (
    <section className="article__page">
      <Link to="/articles">Back to Article List</Link>
      <article className="flex-center">
        <div className="article__page--inner">
          <h2 className="article__title">
            {title}{' '}
            <span className="article__timestamp">
              <br />
              <Moment format="MMM Do YYYY">{updated_at}</Moment>
            </span>
          </h2>
          <ReactMarkdown source={content} />
        </div>
      </article>
    </section>
  );
};

export default Article;
