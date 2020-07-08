import React from 'react';
import Layout from '../components/layout';
import Article from '../components/Article';

export default ({ pageContext: { title, content } }) => {
  return (
    <Layout>
      <Article
        title={title}
        content={content}
      />
    </Layout>
  )
}