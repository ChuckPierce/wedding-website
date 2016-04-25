import React, { PropTypes, Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
          <Nav />
          <Header image="img/proposal-2.jpg"/>
          <div className="content-container">
              <div className="content" style={{ padding: '30px 100px' }}>
                  <h2 style={{ textAlign: 'center' }}>How We Met</h2>
                  <hr style={{ marginTop: 5 }}/>
                  <p style={{ paddingTop: 30 }}>
                      Kaitlin and Chuck met while being a part of the Penn State Thespians while
                      attending Pennsylvania State University. The Thespians are a student-run
                      organization, mostly for those not majoring in Theatre. They both joined for
                      their love of performing and being a part of the arts. After meeting some time in
                      2007 (exact date unknown) they became friends quickly and performed in shows together.
                  </p>
                  <p>
                      After Kaitlin came back from studying abroad in the fall of 2008, they found themselves both
                      at a party with fellow Thespians and theatre people. Kaitlin, noticing Chuck from across the
                      room, walked over to him and said, with no fear, "We should date". Chuck was taken aback by her
                      bravery 
                  </p>
              </div>
          </div>
      </div>
    );
  }
}

About.need = [() => { return Actions.fetchPosts(); }];
About.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

About.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(About);
