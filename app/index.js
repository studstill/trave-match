'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, RouteHandler, Link, IndexRoute, NotFoundRoute} from 'react-router';

// Components
import Header from './js/components/header/Header.js';
import OriginInput from './js/components/origin_input/Origin.js';
import Destinations from './js/components/random_destinations/Destinations.js';

var App = React.createClass({

  render: function() {
    return (
      <div className="container-fluid mainContainer">
        <Header className="row"/>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router>
    <Route name='home' path="/" component={App}>
    <IndexRoute component={OriginInput} />
      <Route path="origin_input" component={OriginInput} />
      <Route path="random_destinations" component={Destinations} />
    </Route>
  </Router>
), document.getElementById('app'));
