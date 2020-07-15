import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeaturedVideo from './FeaturedVideo';
import './FeaturedVideoList.css';

export default () => {
  const { allStrapiFeaturedVideo } = useStaticQuery(graphql`
    query {
      allStrapiFeaturedVideo {
        nodes {
          id
          title
          videoURL
          description
        }
      }
    }
  `)
  return (
    <section className="video-container main-page__section">
      <h3 className="cinzel main-page__title">Further Resources</h3>
      { allStrapiFeaturedVideo.nodes.map(video => (
        <FeaturedVideo
         key={video.id}
         videoSrcUrl={video.videoURL}
         title={video.title}
        />
      ))}
    </section>
  )
}
