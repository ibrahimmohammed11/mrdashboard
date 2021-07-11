import React,{ Fragment } from 'react';

import {Route, Switch } from 'react-router-dom';

import Dashboard from './Components/dashboard';

import './App.css';


function App() {
  return (
    <Fragment>
          <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
    </Fragment>
  );
}

export default App;
