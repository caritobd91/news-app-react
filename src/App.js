import React, { Component } from 'react';
import './App.css';
import './css/news.css'
import './css/header.css'
import './css/weather.css'
import './css/quote.css'
import News from './components/news';
import Weather from './components/weather';
import Quotes from './components/quotes';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 class="headline">Top News</h1>
          <div class="weather"><Weather /></div>
        </header>

        <div class="articles"><News newsLimit={3} /></div>
        <div class="quotes"><Quotes /></div>
      </div>
    );
  }
}

export default App;
