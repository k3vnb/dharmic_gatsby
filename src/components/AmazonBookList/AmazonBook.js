import React, { useState, useEffect } from 'react';

export default ({ srcUrl, title, imgUrl }) => {
  const [showThumbnail, setShowThumbnail] = useState(false);
    // thumbnail imgs are loaded asyncronously to improve performance metrics
    useEffect(() => {
      const onLoad = () => !showThumbnail && setShowThumbnail(true);
      document.addEventListener('scroll', onLoad);
      return () => document.removeEventListener('scroll', onLoad);
    }, [showThumbnail]);
  return (
  <div className="amazon-book-card">
    <img
      className="amazon-book__thumbnail"
      src={imgUrl}
      alt={`${title} thumbnail`}
    />
    <div className="amazon-book__title"><a href={srcUrl}>{title}</a></div>
    <a className="flex-center" href={srcUrl}>
      <button className="amazon-book__btn btn btn-reset" type="button">
        <img
          className="amzn-logo"
          src={showThumbnail ? "https://img.icons8.com/color/48/000000/amazon.png" : ''}
          alt="amazon logo"
        />
        <span className="amazon-book__btn-text">Shop Now</span>
      </button>
    </a>
  </div>
)};
