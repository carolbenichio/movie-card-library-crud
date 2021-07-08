import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, subtitle, rating, imagePath } = movie;
    return (
      <div class="movie-card" data-testid="movie-card">
        <img src={imagePath} alt={title}/>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>{rating}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
