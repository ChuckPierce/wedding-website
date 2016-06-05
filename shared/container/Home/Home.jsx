import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
// import * as Actions from '../../redux/actions/actions';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  // componentDidMount() {
  //   if (this.props.posts.length === 0) {
  //     this.props.dispatch(Actions.fetchPosts());
  //   }
  // }

  // add(name, title, content) {
  //   this.props.dispatch(Actions.addPostRequest({ name, title, content }));
  //   this.setState({
  //     showAddPost: false,
  //   });
  // }

  // handleClick(e) {
  //   this.setState({
  //     showAddPost: !this.state.showAddPost,
  //   });

  //   e.preventDefault();
  // }
  render() {
    return (
      <div>
        <Nav />
        <Header image="img/chuckkaitlin-52.jpg" />
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
