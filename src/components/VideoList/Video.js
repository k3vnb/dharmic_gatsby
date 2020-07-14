import React from 'react';
import './VideoList.css';

export default ({ videoSrcUrl, videoTitle }) => {
  return (
    <div className="video-container">
      <iframe
        className="video-iframe"
        src={videoSrcUrl}
        title={videoTitle}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};
