import React, { useEffect, useState } from 'react';
import './FeaturedVideoList.css';

export default ({ videoSrcUrl, videoTitle }) => {
  const [showVideo, setShowVideo] = useState(false);
  // video is loaded asyncronously to improve performance metrics
  useEffect(() => {
    const onLoad = () => {
      setShowVideo(true);
    };
    window.addEventListener('load', onLoad());
    return () => window.removeEventListener('load', onLoad);
  }, []);
  return (
    <div className="video-container">
      {showVideo && (
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
      )}
    </div>
  );
};
