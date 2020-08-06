import React from 'react';

export default ({ srcUrl, title, imgUrl }) => (
  <div className="amazon-book-link">
    <img
      className="amazon-book__thumbnail"
      src={imgUrl}
      alt={`${title} thumbnail`}
    />
    <div className="amazon-book__title"><a href={srcUrl}>{title}</a></div>
    <a href={srcUrl}>
      <button className="amazon-book__btn btn btn-reset" type="button">
        <img
          className="amzn-logo"
          src="https://img.icons8.com/color/48/000000/amazon.png"
          alt="amazon logo"
        />
        <span className="amazon-book__btn-text">Shop now</span>
      </button>
    </a>
  </div>
);
