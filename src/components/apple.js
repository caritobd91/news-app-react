import React, { Component } from 'react';
import Article from './Article';

// This component hits a news api endpoint that returns all Apple related news

const url =
  "https://newsapi.org/v2/everything?q=apple&from=2019-07-18&to=2019-07-18&sortBy=popularity&apiKey=cb83495bb9724d3c80337804facdd7de";

  class Apple extends Component {
    constructor() {
      super();
      this.state = { articles: [], displayedArticles: [], isOpen: false };
    }

    async getAppleNews() {
      let result = await fetch(url).then(response => response.json());
      return result.articles;
    }

    async componentDidMount() {
      this.getAppleNews().then(
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

    // This function toggles the button text
    toggleArticlesButtonText = () => {
      return this.state.isOpen ? 'See Less Articles' : 'See All Articles';
    }

    render() {
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

  export default Apple;
