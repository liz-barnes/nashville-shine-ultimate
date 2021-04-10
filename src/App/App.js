import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Components/Nav';
import Routes from '../helpers/Routes';
// import logo from './logo.svg';
// import "./App.scss";

export default function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes />
      </Router>
      <h2>Nashville 'Shine</h2>
      <button className="btn btn-info">I am a button</button>
    </div>
  );
}
