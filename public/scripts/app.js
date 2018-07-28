'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Are you feeling lucky?',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No Options'
    )
);
var appRoot = document.getElementById('app');

var user = {
    name: 'Billy',
    age: '31',
    location: 'New Zealand'
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anon'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:  ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, appRoot);
