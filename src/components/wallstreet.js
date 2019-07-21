import React, { Component } from 'react';
import Article from './article';

const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cb83495bb9724d3c80337804facdd7de"

class Wallstreet extends Component {
  constructor() {
    super();
    this.state = { articles: [], displayedArticles: [], isOpen: false };
  }

  async getWallstreet() {
    let result = await fetch(url).then(response => response.json());

    console.log('wall', result);
    return result.articles;
  }

  async componentWillMount() {
    this.getWallstreet().then(
      article => this.setState({articles: article})
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

export default Wallstreet;