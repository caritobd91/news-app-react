import React, { Component } from 'react';

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de";

  class News extends Component {
    constructor() {
      super();
      this.state = { articles: [] };
    }

    async getNews() {
      let result = await fetch(url).then(response => response.json());

      console.log(result);
      return result.articles;
    }

    componentWillMount() {
      this.getNews().then(
        news =>
          this.setState({articles: news.map((item, key) =>
            <li key={item.title}>{item.title} by {item.author}</li>
          )}));
    }

    render() {
      return (
        <ul>
          {this.state.articles}
        </ul>
      );
    }
  }

  export default News;