import React, { PropTypes, Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';

class Gifts extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Header image="img/chuckkaitlin-24.jpg" />
        <div className="content-container">
          <div className="content" style={{ textAlign: 'center' }}>
            <h3>View our registry on Bed Bath & Beyond</h3>
            <p style={{ textAlign: 'center', paddingBottom: 20 }}>
              <a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=543948931&pwsurl=">
                <img src="img/bed_bath.png" alt="bed_bath_beyond" style={{ cursor: 'pointer' }} />
              </a>
            </p>
            <h3>In addition to a traditional registry, we have also set up a Honeymoon Registry.</h3>
            <p style={{ textAlign: 'center', paddingBottom: 20 }}>
              <a href="http://www.travelersjoy.com/kaitlinandcharles">
                <img src="img/honeymoon_registry.jpg" alt="honeymoon_registry" style={{ cursor: 'pointer' }} />
              </a>
            </p>
            <h3>Alternatively, in lieu of gifts we would love people to make a donation to the Four Diamonds Fund, a charity we have supported since our time at Penn State</h3>
            <p style={{ textAlign: 'center', paddingBottom: 20 }}>
              <a href="http://fourdiamonds.donordrive.com/campaign/kaitlinandcharles">
                <img src="img/fourdiamonds_logo.jpg" alt="four_diamonds" style={{ cursor: 'pointer' }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Gifts.need = [() => { return Actions.fetchPosts(); }];
Gifts.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Gifts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Gifts);
