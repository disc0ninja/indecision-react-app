import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// App component
import IndecisionApp from './components/IndecisionApp';



ReactDOM.render(<IndecisionApp options={['dinner', 'lunch']} />, document.getElementById('app'));
