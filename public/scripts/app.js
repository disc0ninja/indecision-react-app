'use strict';

// App Target
var appRoot = document.getElementById('app');

// App Data
var app = {
    title: 'Indecision App',
    subtitle: 'Are you feeling lucky?',
    options: []

    // Options Form Submission
};var onFormSubmit = function onFormSubmit(e) {
    // Stop full page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderApplication();
    }

    console.log(option);
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

// Clear options from app{}
var removeAll = function removeAll() {
    app.options = [];
    renderApplication();
};

// Render Application Function
var renderApplication = function renderApplication() {
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
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { onClick: renderApplication },
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

// Start Application
renderApplication();
