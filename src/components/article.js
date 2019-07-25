import React, { Component } from 'react';

// This component is used in all news pages since they use the same markup and data structure

class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }

  hasNewsLimit() {
    return this.props.newsLimit > 0;
  }

  render() {
    return (
      <div>
        <div className="news">
          <div className="news-image" style={{backgroundImage: `url(${this.props.article.urlToImage})`}}></div>
          <h1>{ this.props.article.title }</h1>
          <p>{ this.props.article.description }</p>
        </div>
      </div>
    );
  }
}

export default Article;