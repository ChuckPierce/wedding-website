import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/"><img alt="Wedding-Logo" className="logo" src="img/logo-white60.png" /></Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/info">Venue</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  );
}

Nav.contextTypes = {
  router: React.PropTypes.object,
};

Nav.propTypes = {
};

export default Nav;
