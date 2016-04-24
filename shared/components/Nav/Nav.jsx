import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav() {
  return (
    <div className="nav">
        <div className="nav-container">
            <img className="logo" src="img/logo-white.png"/>
            <Link to="/our-story">Our Story</Link>
            <Link to="/venue">Venue</Link>
            <Link to="/gifts">Gifts</Link>
            <Link to="/rsvp">RSVP</Link>
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
