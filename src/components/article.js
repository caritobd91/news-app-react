import React, { Component } from 'react';

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
        <div className="news" key={ this.article.title }>
          <div className="news-image" style={{backgroundImage: `url(${this.article.urlToImage})`}}></div>
          <h1>{ this.article.title }</h1>
          <p>{ this.article.description }</p>
        </div>
      </div>
    );
  }
}

export default Article;