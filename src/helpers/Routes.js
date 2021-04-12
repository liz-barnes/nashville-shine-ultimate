import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Roster from '../Components/Roster';
import Schedule from '../Components/Schedule';
import Highlights from '../Components/Highlights';
import Contact from '../Components/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/roster" component={Roster} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/highlights" component={Highlights} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}
