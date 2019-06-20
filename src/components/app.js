import React from 'react';
import { FlatList } from 'react-native';

// Import getNews function from news.js
import { getNews } from './src/news';
// We'll get to this one later
import Article from './src/components/Article';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }
}