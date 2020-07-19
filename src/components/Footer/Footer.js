import React from 'react';
import './Footer.css';

export default () => {
  // console.log('footer');
  return (
    <footer className="footer">
      © {new Date().getFullYear()} dharmicastrology.com
      {` `}
      {/* <a
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icons/set/lotus"
      >
        Lotus icon
      </a>{' '}
      icon by{' '}
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8
      </a> */}
    </footer>
  );
};
