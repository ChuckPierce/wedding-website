import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddPost: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.dispatch(Actions.fetchPosts());
    }
  }

  add(name, title, content) {
    this.props.dispatch(Actions.addPostRequest({ name, title, content }));
    this.setState({
      showAddPost: false,
    });
  }

  handleClick(e) {
    this.setState({
      showAddPost: !this.state.showAddPost,
    });

    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Nav />
        <Header image="img/chuckkaitlin-57.jpg" />
        <div className="content-container" style={{ backgroundColor: 'transparent' }}>
          <div style={{ padding: 50, textAlign: 'center' }}>
            <img src="img/logo-white.png" alt="white-logo" style={{ width: 300, height: 300 }}/>
            <h1>Kaitlin Boland and Charles Pierce Wedding</h1>
            <h1>April 1st, 2017</h1>
          </div>
        </div>
      </div>
    );
  }
}

Home.need = [() => { return Actions.fetchPosts(); }];
Home.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
