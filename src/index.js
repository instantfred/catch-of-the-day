import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

// Params: element we want to render, where do we want to add it
render(<App />, document.querySelector('#main'));