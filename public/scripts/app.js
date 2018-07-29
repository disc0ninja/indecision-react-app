'use strict';

// Set app container div in index.html
var app = document.getElementById('app');

var visState = 'Show';
var toggleVis = function toggleVis() {
  if (visState === 'Show') {
    visState = 'Close';
  } else if (visState === 'Close') {
    visState = 'Show';
  } else {
    console.log('Something went wrong');
  }
  renderApp();
};
// render app
var renderApp = function renderApp() {
  var visible = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVis },
      visState + ' details'
    ),
    React.createElement(
      'p',
      { hidden: visState === 'Show' },
      'Hey, These are some details you can see!'
    )
  );

  ReactDOM.render(visible, app);
};

// start app
renderApp();
