import React, { Component } from 'react';
import './App.css';
import './css/news.css'
import './css/header.css'
import './css/weather.css'
import './css/quote.css'
import Apple from './components/Apple';
import News from './components/News';
import Weather from './components/Weather';
import Quotes from './components/Quotes';
import Wallstreet from './components/Wallstreet';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// This app renders all news, weather and daily quote components to create a portal where you can get caught up with current news, and allows you to check the weather as well as giving you an inspirational quote of the day

 class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div>
          <header>
          <h1 className="headline">Top US News</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/wallstreet/">Wallstreet Journal</NavLink>
            </li>
            <li>
              <NavLink to="/apple/">Apple News</NavLink>
            </li>
          </ul>
        </nav>
        <div><Weather /></div>

        </header>

        <Route path="/" exact render={() => (
          <div>
            <div className="articles"><News newsLimit={3} /></div>
            <div className="quotes"><Quotes /></div>
          </div>
          )
        } />
        <Route path="/wallstreet/" exact component={() =>  (
          <div className="articles"><Wallstreet newsLimit={3}/></div>
        )} />
        <Route path="/apple/" exact component={() => (
          <div className="articles"><Apple newsLimit={3}/></div>
        )} />
      </div>
        </div>
      </Router>
    );
  }
}

export default App;
