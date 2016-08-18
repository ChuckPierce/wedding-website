import React, { Component, PropTypes } from 'react';
const API_BROWSER_KEY = 'AIzaSyAvS6p1tLQYCFC4lbrqT3fl6csgh3yvhaQ';

class Gmap extends Component {
  constructor() {
    super();
    this.state = {
      width: 980,
      height: 300,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentDidMount() {
    this.handleResize();
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }
  handleResize() {
    // debugger;
    const query = document.querySelector(`.${this.props.classString}`);
    if (query.offsetWidth <= 980) {
      this.setState({ width: query.offsetWidth });
    } else if (query.offsetWidth > 980) {
      this.setState({ width: 980 });
    }
  }
  render() {
    const { coordsString, classString } = this.props;
    const { width, height } = this.state;
    return (
      <p className={classString}>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${API_BROWSER_KEY}&q=${coordsString}`}
          width={width} height={height} frameBorder="0" style={{ border: 0 }} allowFullScreen
        />
      </p>
    );
  }
}

Gmap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  coordsString: PropTypes.string.isRequired,
  classString: PropTypes.string.isRequired,
};

export default Gmap;
