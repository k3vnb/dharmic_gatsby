import React from 'react';
import ReactMarkdown from 'react-markdown';
import './PackageItemPage.css';

const PackageItemPage = ({ title, description, price }) => {
  return (
    <article className="page package-item-page">
      <h2>{title}</h2>
      <ReactMarkdown source={description} />
      <p>Price: ${price}</p>
    </article>
  );
};

export default PackageItemPage;
