import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import FlyoutMenu from './FlyoutMenu';
import './Header.css';

const Header = ({ siteTitle }) => {
  const [showFlyout, setShowFlyout] = useState(false);
  const toggleFlyout = () => setShowFlyout(!showFlyout)

  const navLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/articles' },
  ].map(({ name, path }) => (
    <li key={name}>
      <Link to={path} className="header__nav-links">
        {name}
      </Link>
    </li>
  ));

  return (
    <header className="header">
      <h1 className="cinzel header__title">
        <Logo />
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="expanded-nav">
        <ul className="header__nav-list ul-reset">{navLinks}</ul>
      </nav>
      <button
        className="burger-menu"
        type="button"
        onClick={toggleFlyout}
      >
        <BurgerMenu />
      </button>
      {showFlyout && (
        <nav className="collapsed-nav">
          <FlyoutMenu>
            <ul className="ul-reset">{navLinks}</ul>
          </FlyoutMenu>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
