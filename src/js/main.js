'use-strict';

var App = require('./App');

React.render(
  <App pollInterval={2000} />,
  document.getElementById('content')
);
