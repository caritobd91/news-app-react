import React, { Component } from 'react';

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de";

  class News extends Component {
    constructor() {
      super();
      this.state = { articles: [], displayedArticles: [] };
    }

    async getNews() {
      let result = await fetch(url).then(response => response.json());

      console.log(result);
      return result.articles;
    }

    async componentWillMount() {
      this.getNews().then(
        news => this.setState({articles: news})
      ).then(() => {
        this.setDisplayedArticles();
      });
    }

    hasNewsLimit() {
      return this.props.newsLimit > 0;
    }

    setDisplayedArticles() {
      if (this.hasNewsLimit()) {
        this.setState({displayedArticles: this.state.articles.slice(0, this.props.newsLimit)});
      }
      else {
        this.setState({displayedArticles: this.state.articles});
      }
    }

    showAllArticles = () => {
      this.setState({ displayedArticles: this.state.articles})
    }

    render() {
      console.log('displayed articles ', this.state.displayedArticles);
      return (
        <div>
        {this.state.displayedArticles.map((article, key) =>
          <div className="news" key={ article.title }>
            <div className="news-image" style={{backgroundImage: `url(${article.urlToImage})`}}></div>
            <h1>{ article.title }</h1>
            <p>{ article.description }</p>
          </div>
        )}
        <button className="button-all" onClick={this.showAllArticles}>See All Articles</button>
        </div>
      );
    }
  }

  export default News;