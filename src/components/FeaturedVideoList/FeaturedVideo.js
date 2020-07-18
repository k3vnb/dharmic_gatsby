import React, { useEffect, useState } from 'react';
import './FeaturedVideoList.css';

export default ({ videoSrcUrl, title }) => {
  const [showVideo, setShowVideo] = useState(false);
  // video is loaded asyncronously to improve performance metrics
  useEffect(() => {
    const onLoad = () => !showVideo && setShowVideo(true);
    document.addEventListener('scroll', onLoad);
    return () => document.removeEventListener('scroll', onLoad);
  }, [showVideo]);
  return (
    <div className="video-container">
      {showVideo && (
        <iframe
          className="video-iframe"
          src={videoSrcUrl}
          title={title}
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      )}
    </div>
  );
};
