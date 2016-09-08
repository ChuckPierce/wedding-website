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
        <Header image="img/proposal.jpg" />
        <div className="content-container">
          <div className="content">
            <h2>How We Met</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
                Kaitlin and Chuck met while being a part of the Penn State Thespians while
                attending Pennsylvania State University. The Thespians are a student-run
                organization, mostly for those not majoring in Theatre. They both joined for
                their love of performing and being a part of the arts. After meeting some time in
                2007 (exact date unknown) they became friends and performed in shows together.
            </p>
            <p>
                After Kaitlin came back from studying abroad in the fall of 2008, they found themselves both
                at a party with fellow Thespians and theatre people. Kaitlin, noticing Chuck from across the
                room, walked over to him and said, with no fear, "We should date". Chuck was taken aback by her
                bravery but soon after they started dating. They also had a "showmance" while being a part of
                the production staff for the Penn State Thespian production of Joseph and the Amazing Technicolor
                Dreamcoat.
            </p>
            <h2>Moving to NYC</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              Skipping ahead to the summer of 2010. Kaitlin and Chuck had been dating long distance since Chuck graduated in 2009.
              After Kaitlin's graduation from Penn State, she immediatley moved to New York City for an internship. After another internship
              in the fall, she convinced Chuck to move to NYC.  They started living together in Washington Heights at the start of 2011.
            </p>
            <h2>The Proposal</h2>
            <hr style={{ marginTop: 5 }} />
            <p>
              After living and having fun in the city for nearly four years, Chuck decided to plan the proposal.
              Knowing that she was a big Broadway fan, he contacted her boss at her new job: the Assistant Company Manager
              of the Broadway show School of Rock.  Chuck planned with her boss to get Kaitlin to come to the theatre by
              saying there was a meeting on stage. Kaitlin was late to the fake work meeting and was absolutely surprised
              when she found Chuck standing on the stage.  She said yes and they had a lovely dinner at One If By Land, Two
              If By Sea.
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
