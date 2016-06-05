import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Home from './container/Home/Home';
import About from './container/About/About';
import Venue from './container/Venue/Venue';
import Gifts from './container/Gifts/Gifts';
import Rsvp from './container/Rsvp/Rsvp';
// import { requireAuth } from '../server/server';

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    if (authenticated) {
      replace({
        pathname: '/',
      });
    }
    callback();
  };

  return (
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/our-story" component={About} onEnter={requireAuth} />
      <Route path="/venue" component={Venue} onEnter={requireAuth} />
      <Route path="/gifts" component={Gifts} onEnter={requireAuth} />
      <Route path="/rsvp" component={Rsvp} onEnter={requireAuth} />
    </Route>
  );
};

// export default routes;
