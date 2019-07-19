import React, { Component } from 'react';
import './App.css';
import './css/news.css'
import './css/header.css'
import './css/weather.css'
import './css/quote.css'
import News from './components/news';
import Weather from './components/weather';
import Quotes from './components/quotes';
import Wallstreet from './components/wallstreet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


 class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div>
          <header>
          <h1 className="headline">Top News</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/wallstreet/">Wallstreet Journal</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <div className="weather"><Weather /></div>

        </header>

        <Route path="/" exact render={() => (
          <div>
            <div className="articles"><News newsLimit={3} /></div>
            <div className="quotes"><Quotes /></div>
          </div>
          )
        } />
        <Route path="/wallstreet/" exact component={() =>  <Wallstreet newsLimit={3}/>} />
        <Route path="/users/" render={() => <div className="articles">contact us never</div>} />
      </div>


        </div>
      </Router>
    );
  }
}

export default App;
