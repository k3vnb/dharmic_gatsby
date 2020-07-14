import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Video from './Video';
import './VideoList.css';

export default () => {
  const { allStrapiVideos } = useStaticQuery(graphql`
    query {
      allStrapiVideos {
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
    <section className="video-container">
      <h3 className="cinzel main-page__title">Further Resources</h3>
      { allStrapiVideos.nodes.map(video => (
        <Video
         key={video.id}
         videoSrcUrl={video.videoURL}
         title={video.title}
        />
      ))}
    </section>
  )
}
