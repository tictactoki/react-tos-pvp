import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Build from './models/Build';
import './index.css';

ReactDOM.render(
  <Build circles="http://localhost:8090/circles" />,
  document.getElementById('root')
);
