import React, { PropTypes } from 'react';

function Header(props) {
  return (
    <div className="header" style={{ backgroundImage: `url(${props.image})` }}>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  image: PropTypes.string,
};

export default Header;
