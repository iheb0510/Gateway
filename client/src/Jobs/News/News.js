import React, { Component } from 'react';

import Search from './Search.js';
import './Search.css';



class News extends Component {
  render() {
    return (
      <div >
        <Search  default="bbc-news" />
      </div>
    );
  }
}

export default News;