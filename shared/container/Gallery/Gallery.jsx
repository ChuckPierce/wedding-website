import React, { PropTypes, Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Lightbox from 'react-images';
const THUMBNAIL_SIZE = 150;
const styles = {
  gallery: {
    marginLeft: -5,
    marginRight: -5,
    overflow: 'hidden',
  },
  thumbnail: {
    backgroundSize: 'cover',
    borderRadius: 3,
    display: 'inline-block',
    height: 100,
    margin: 5,
    overflow: 'hidden',
    width: THUMBNAIL_SIZE,
  },
  thumbnailImage: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    // height: THUMBNAIL_SIZE,
    // left: '50%',
    // position: 'relative',
    //
    // WebkitTransform: 'translateX(-50%)',
    // MozTransform:    'translateX(-50%)',
    // msTransform:     'translateX(-50%)',
    // transform:       'translateX(-50%)',
  },
};

const engagment = [
  {
    src: 'img/chuckkaitlin-13.jpg',
    thumb: 'img/chuckkaitlin-13_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-24.jpg',
    thumb: 'img/chuckkaitlin-24_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-4.jpg',
    thumb: 'img/chuckkaitlin-4_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-13.jpg',
    thumb: 'img/chuckkaitlin-13_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-15.jpg',
    thumb: 'img/chuckkaitlin-15_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-19.jpg',
    thumb: 'img/chuckkaitlin-19_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-29.jpg',
    thumb: 'img/chuckkaitlin-29_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-34.jpg',
    thumb: 'img/chuckkaitlin-34_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-37.jpg',
    thumb: 'img/chuckkaitlin-37_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-41.jpg',
    thumb: 'img/chuckkaitlin-41_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-52.jpg',
    thumb: 'img/chuckkaitlin-52_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-53.jpg',
    thumb: 'img/chuckkaitlin-53_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-54.jpg',
    thumb: 'img/chuckkaitlin-54_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-70.jpg',
    thumb: 'img/chuckkaitlin-70_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-73.jpg',
    thumb: 'img/chuckkaitlin-73_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-75.jpg',
    thumb: 'img/chuckkaitlin-75_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-7.jpg',
    thumb: 'img/chuckkaitlin-7_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-40.jpg',
    thumb: 'img/chuckkaitlin-40_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-56.jpg',
    thumb: 'img/chuckkaitlin-56_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-57.jpg',
    thumb: 'img/chuckkaitlin-57_thumb.jpg'
  },
  {
    src: 'img/chuckkaitlin-13-2.jpg',
    thumb: 'img/chuckkaitlin-13-2_thumb.jpg'
  },
];

const proposal = [
  {
    src: 'img/proposal-8.jpg',
    thumb: 'img/proposal-8_thumb.jpg'
  },
  {
    src: 'img/proposal.jpg',
    thumb: 'img/proposal_thumb.jpg'
  },
  {
    src: 'img/proposal-2.jpg',
    thumb: 'img/proposal-2_thumb.jpg'
  },
  {
    src: 'img/proposal-3.jpg',
    thumb: 'img/proposal-3_thumb.png'
  },
  {
    src: 'img/proposal-4.jpg',
    thumb: 'img/proposal-4_thumb.jpg'
  },
  {
    src: 'img/proposal-5.jpg',
    thumb: 'img/proposal-5_thumb.jpg'
  },
  {
    src: 'img/proposal-6.jpg',
    thumb: 'img/proposal-6_thumb.jpg'
  },
  {
    src: 'img/proposal-7.jpg',
    thumb: 'img/proposal-7_thumb.jpg'
  },
];

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(i, e) {
    e.preventDefault();
    this.setState({
      currentImage: i,
      lightboxIsOpen: true,
    });
  }
  closeLightbox(e) {
    e.preventDefault();
    this.setState({ lightboxIsOpen: false });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }
  renderGallery(images, index = 0) {
    if (!images) return undefined;
    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i + index, e)}
          style={styles.thumbnail}
        >
          <img
            height={styles.thumbnail.size}
            alt={''}
            src={obj.thumb}
            style={styles.thumbnailImage}
            width={styles.thumbnail.size}
          />
        </a>
      );
    });
    return (
      <div>
        {gallery}
      </div>
    );
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Nav />
        <Header image="img/chuckkaitlin-13.jpg" />
        <div className="content-container">
          <div className="content">
            {this.renderGallery(engagment)}
            <div className="caption">Photos by <i>nate heckenberger photography</i></div>
            <br />
            <br />
            {this.renderGallery(proposal, 21)}
            <div className="caption">Photos by <i>Alex Mayer</i></div>
          </div>
          <Lightbox
            images={this.props.images}
            isOpen={this.state.lightboxIsOpen}
            currentImage={this.state.currentImage}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClickImage={this.handleClickImage}
            onClose={this.closeLightbox}
          />
        </div>
      </div>
    );
  }
}

Gallery.need = [() => { return Actions.fetchPosts(); }];
Gallery.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Gallery.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
  })),
};

Gallery.defaultProps = {
  images: [].concat(engagment, proposal),
};

export default connect(mapStateToProps)(Gallery);
