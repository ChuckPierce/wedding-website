import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Home from './container/Home/Home';
import About from './container/About/About';
import Venue from './container/Venue/Venue';
import Gifts from './container/Gifts/Gifts';
import Gallery from './container/Gallery/Gallery';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/our-story" component={About} />
    <Route path="/venue" component={Venue} />
    <Route path="/gifts" component={Gifts} />
    <Route path="/gallery" component={Gallery} />
  </Route>
);

export default routes;
