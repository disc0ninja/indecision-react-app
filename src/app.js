import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// App component
import IndecisionApp from './components/IndecisionApp';

// Styles
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
