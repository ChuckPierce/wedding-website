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
          <div className="content">
            <h2>Coming soon...</h2>
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
