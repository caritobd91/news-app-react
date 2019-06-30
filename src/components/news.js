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
        news => this.setState({articles: news})
      );
    }

    render() {
      return (
        this.state.articles.map((article, key) =>
          <div key={ article.title }>
            <h1>{ article.title }</h1>
            <p>{ article.description }</p>
          </div>
        )
      );
    }
  }

  export default News;