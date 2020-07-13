import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';
import './Header.css';

const Header = ({ siteTitle }) => (
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
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
