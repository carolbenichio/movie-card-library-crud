import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieDetails, MovieList, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
