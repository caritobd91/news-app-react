import React, { Component } from 'react';

// This component hits an api that return a random  quote of the day

const url = "https://favqs.com/api/qotd";

  class Quotes extends Component {
    constructor() {
      super();
      this.state = { quotes: {} };
    }

    async getQuotes() {
      let result = await fetch(url)
      .then(response => response.json())
      .catch((error) => {
        console.log(error);
      });

      return result;
    }

    componentDidMount() {
      this.getQuotes().then(
        quote => this.setState({quotes: quote.quote})
      );
    }

    render() {
      return (
        <div>
          <h3>{ '"' + this.state.quotes.body + '"'}</h3>
          <p className="author">{'— ' + this.state.quotes.author}</p>
        </div>
      );
    }
  }

export default Quotes;
