import React, { Component } from 'react';
import Article from './article';

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de";

  class News extends Component {
    constructor() {
      super();
      this.state = { articles: [], displayedArticles: [], isOpen: false };
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
        this.setState({isOpen: false, displayedArticles: this.state.articles.slice(0, this.props.newsLimit)});
      }
      else {
        this.setState({displayedArticles: this.state.articles});
      }
    }

    toggleArticles = () => {
      if (!this.state.isOpen)
        this.setState({ displayedArticles: this.state.articles, isOpen: true });
      else {
        this.setDisplayedArticles();
        window.scrollTo(0, 0);
      }
    }

    toggleArticlesButtonText = () => {
      return this.state.isOpen ? 'See Less Articles' : 'See All Articles';
    }

    render() {
      console.log('displayed articles ', this.state.displayedArticles);
      return (
        <div>
          {this.state.displayedArticles.map((article, index) =>
            <Article
              article={article}
              key={index}
            />
          )}
          <button className="button-all" onClick={this.toggleArticles}>{this.toggleArticlesButtonText()}</button>
        </div>
      );
    }
  }


  export default News;