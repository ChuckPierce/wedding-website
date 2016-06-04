import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';
import About from './container/About/About';
import Venue from './container/Venue/Venue';
import Gifts from './container/Gifts/Gifts';
import Rsvp from './container/Rsvp/Rsvp';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PostContainer} />
    <Route path="/post/:slug" component={PostDetailView} />
    <Route path="/our-story" component={About} />
    <Route path="/venue" component={Venue} />
    <Route path="/gifts" component={Gifts} />
    <Route path="/rsvp" component={Rsvp} />
  </Route>
);

export default routes;
