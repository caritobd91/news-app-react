import React, { Component } from 'react';
import Article from './Article';

// This component hits a news api that returns the top headlines of the US

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de";

  class News extends Component {
    constructor() {
      super();
      this.state = { articles: [], displayedArticles: [], isOpen: false };
    }

    async getNews() {
      let result = await fetch(url).then(response => response.json());

      return result.articles;
    }

    async componentDidMount() {
      this.getNews().then(
        news => this.setState({articles: news})
      ).then(() => {
        this.setDisplayedArticles();
      });
    }

    // Created this method to check length of articles
    hasNewsLimit() {
      return this.props.newsLimit > 0;
    }

    // In the App, each news component has a prop that specifies the news limit to show only 3 at first and all of them when "see all articles" button is clicked.
    setDisplayedArticles() {
      if (this.hasNewsLimit()) {
        this.setState({isOpen: false, displayedArticles: this.state.articles.slice(0, this.props.newsLimit)});
      }
      else {
        this.setState({displayedArticles: this.state.articles});
      }
    }

    // This function toggles the articles from the limit set by the prop, to all.
    toggleArticles = () => {
      if (!this.state.isOpen)
        this.setState({ displayedArticles: this.state.articles, isOpen: true });
      else {
        this.setDisplayedArticles();
        window.scrollTo(0, 0);
      }
    }

    // This function toggles the text of the button
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

  export default News;