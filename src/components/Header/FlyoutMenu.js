import React, { useEffect, useRef } from 'react';

export default ({ children, setShowFlyout }) => {

  const ref = useRef();
  useEffect(() => {
    const handleClickAway = e => {
      // e.stopPropagation();
      if (ref.current.id !== e.target.id) {
        setShowFlyout(false)
      }
    }
    document.addEventListener('click', handleClickAway);
    return () => {
      document.removeEventListener('click', handleClickAway);
    }
  }, [setShowFlyout])

  return (
    <nav className="collapsed-nav nav" ref={ref} id="flyout">
      <div ref={ref} className="flyout-menu">
        {children}
      </div>
    </nav>
)};
