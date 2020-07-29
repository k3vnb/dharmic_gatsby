import React from 'react';

export default ({ srcUrl }) => (
  <div className="amazon-book-link">
    <iframe
      style={{ width: 120, height: 240 }}
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
      frameBorder="0"
      src={srcUrl}
    />
  </div>
);
