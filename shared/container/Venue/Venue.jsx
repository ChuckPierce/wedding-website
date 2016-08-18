import React, { PropTypes, Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Gmap from '../../components/Gmap/Gmap';

class Venue extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Header image="img/chuckkaitlin-41.jpg" />
        <div className="content-container">
          <div className="content">
            <h2>The Ceremony</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
                The ceremony will take place at the Miller Symphony Hall in downtown Allentown at 2pm.
            </p>
            <p>
              Address: <a href="https://goo.gl/maps/X23Y8h1zGxL2">23 N 6th St, Allentown, PA 18101</a>
            </p>
            <Gmap
              coordsString="pb=!1m14!1m8!1m3!1d2655.4046270483327!2d-75.46925530068768!3d40.603659160657564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33c192028cb97008!2sMiller+Symphony+Hall!5e0!3m2!1sen!2sus!4v1465069020896"
              classString="miller"
            />
            <p>
              Parking:
            </p>
            <h2>The Reception</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              The reception will take place at the Historic Hotel Bethlehem.
            </p>
            <p>
              One hour cocktail hour starts at 5pm with dinner at 6pm to follow.
            </p>
            <p>
              Address: <a href="https://goo.gl/maps/L17SF1Mq7fK2">437 Main St, Bethlehem, PA 18018</a>
            </p>
            <Gmap
              coordsString="pb=!1m14!1m8!1m3!1d5670.947556897084!2d-75.38222752417711!3d40.61948920049042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e47ba8ee77380fb!2sHistoric+Hotel+Bethlehem!5e0!3m2!1sen!2sus!4v1465069686421"
              classString="hotel"
            />
            <p>
              Parking:
            </p>
          </div>
        </div>
      </div>
    );
  }
}
Venue.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Venue.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Venue);
