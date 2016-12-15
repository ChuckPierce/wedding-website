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
                The ceremony will take place at the Miller Symphony Hall in downtown Allentown at 2 pm.
            </p>
            <p>
              Address: <a href="https://goo.gl/maps/X23Y8h1zGxL2">23 N 6th St, Allentown, PA 18101</a>
            </p>
            <Gmap
              coordsString="23 N 6th St, Allentown, PA"
              classString="miller"
            />
            <h2>The Reception</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              The reception will take place at the Historic Hotel Bethlehem with a cocktail hour at 5 pm and dinner starting at 6 pm.
            </p>
            <p>
              Address: <a href="https://goo.gl/maps/L17SF1Mq7fK2">437 Main St, Bethlehem, PA 18018</a>
            </p>
            <Gmap
              coordsString="437 Main St, Bethlehem, PA"
              classString="hotel"
            />
            <h2>Accomodations</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              <img
                alt="Hotel Bethlehem"
                src="img/Hotel-B-Logo.jpg"
                className="hotel-logo"
              />
            </p>
            <p>
              Hotel Bethlehem <br />
              437 Main Street <br />
              Bethlehem, PA 18018 <br />
            </p>
            <p>Rooms Available for 3/31-4/1 & 4/1-4/2</p>
            <p>
              To book by phone:<br />
              Call 610-625-5000 & reference Boland Pierce Wedding
            </p>
            <p>
              Rooms must be booked by 2/28 to ensure group pricing
            </p>
            <br />
            <p>
              <img
                alt="Hyatt Place Bethlehem"
                src="img/hyatt-place.jpg"
                className="hotel-logo"
              />
            </p>
            <p>
              Hyatt Place Bethlehem <br />
              45 W. North Street <br />
              Bethlehem, PA 18018 <br />
            </p>
            <p>Rooms Available for 4/1-4/2</p>
            <p>
              To book by phone:<br />
              Call 888-492-8847 & reference Boland Pierce Wedding<br />
              <br />
              Or book on the web:<br />
              <a href="http://bethlehem.place.hyatt.com/en/hotel/home.html?corp_id=G-OEWB">http://bethlehem.place.hyatt.com/en/hotel/home.html?corp_id=G-OEWB</a>
            </p>
            <p>
              Rooms must be booked by 3/2 to ensure group pricing
            </p>
            <h2>Unoffical After Party</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              Join us after the reception for some local brews at Fegley's Brewworks!<br />
              <a href="http://thebrewworks.com/bethlehem-brew-works/">http://thebrewworks.com/bethlehem-brew-works/</a>
            </p>
            <Gmap
              coordsString="559 Main Street Suite 101 Bethlehem, PA"
              classString="hotel"
            />
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
