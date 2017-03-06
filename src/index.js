import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Build from './Build';
import BuildForm from './models/BuildForm';
import './index.css';
import MainStat from './models/Models'

ReactDOM.render(
  <Build circles="http://localhost:8090/circles" />,
  document.getElementById('root')
);
