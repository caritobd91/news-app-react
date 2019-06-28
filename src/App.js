import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getNews } from './components/news';

 class App extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  fetchNews() {
    getNews().then(
      articles => this.setState({articles})
    ).catch(() => console.log('Could not retrieve articles'));
  }

  render() {
    //why does this get called multiple times?
    //when doing console.log, it only gets called once
    this.fetchNews();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
