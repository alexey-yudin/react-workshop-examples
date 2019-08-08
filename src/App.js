import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Component} from 'react';
import './App.css';
import {BookList} from './book-list/book-list';
import {AboutPage} from './about-page/about-page';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/about'>About</Link>

        <div className="app">
          <Route exact path="/" component={BookList}/>
          <Route path="/about" component={AboutPage}/>
          <Route/>
        </div>
      </Router>
    );
  }
}

export default App;
