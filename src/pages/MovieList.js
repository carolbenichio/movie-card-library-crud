import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
       <div>
          <h1 className="title">MOVIE CARD LIBRARY CRUD</h1>
          <div className="add-bar">
            <Link className="add-card-movies" to="/">Movies</Link>
            <Link className="add-card" to="/movies/new">Add new Card</Link>
          </div>
          <div class="movies" data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
       </div>
    );
  }
}

export default MovieList;
