'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, RouteHandler, Link, DefaultRoute, NotFoundRoute} from 'react-router';

// Components
import Header from './js/components/header/Header.js';
import OriginInput from './js/components/origin_input/Origin.js';
import Destinations from './js/components/random_destinations/Destinations.js';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router>
    <Route name='home' path="/" component={App}>
      <Route path="origin_input" component={OriginInput} />
      <Route path="random_destinations" component={Destinations} />
    </Route>
  </Router>
), document.getElementById('app'));
