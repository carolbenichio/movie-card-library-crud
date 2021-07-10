import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movieDetails: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movieDetails: { ...movie },
      loading: false,
    });
  }

  render() {
    const { movieDetails } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      id,
      subtitle } = movieDetails;
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="movie-details" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="movie-det-btns">
          <Link className="movie-det-btn" to="/">Voltar</Link>
          <Link className="movie-det-btn" to={ `${id}/edit` }>Editar</Link>
          <Link className="movie-det-btn" to="/" onClick={ () => movieAPI.deleteMovie(id) }>Deletar</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
