import React, { Component } from 'react';
import './App.css';
import News from './components/news';
import Weather from './components/weather';
import Quotes from './components/quotes';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
        <News />
        <Quotes />
      </div>
    );
  }
}

export default App;
