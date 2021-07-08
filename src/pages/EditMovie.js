import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      loading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  componentDidMount() {
    this.editMovie();
  }

  async handleSubmit(updatedMovie) {
    this.setState({
      loading: false,
    });
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async editMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    const { /* status */ shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
