import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav() {
  return (
    <div className="nav">
        <div className="nav-container">
            <Link to="/"><img className="logo" src="img/logo-white.png"/></Link>
            <Link to="/our-story">OUR STORY</Link>
            <Link to="/venue">VENUE</Link>
            <Link to="/gifts">GIFTS</Link>
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
