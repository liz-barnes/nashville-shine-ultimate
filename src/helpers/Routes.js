import React from 'react';


import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';

export default function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={Home} />

      <Route exact path='/about' component={About} />

    </Switch>

  )
}
