import React, { PropTypes } from 'react';

function Header(props) {
  return (
    <div className="header">
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
