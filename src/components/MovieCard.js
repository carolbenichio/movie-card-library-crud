import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, subtitle, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img src={imagePath} alt={title}/>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
          <div className="rating-link">
            <p className="rating">{rating}</p>
            <Link className="see-det-link" to={ `/movies/${id}` }>See more!</Link>
          </div>
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
