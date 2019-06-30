import React, { Component } from 'react';
import './App.css';
import News from './components/news';
import Weather from './components/weather';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
        <News />
      </div>
    );
  }
}

export default App;
