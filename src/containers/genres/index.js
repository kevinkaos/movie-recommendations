import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import './genres.scss';
import GenresList from '../../components/GenresList';
import { Route, useRouteMatch } from 'react-router-dom';
import MoviesByGenre from '../../components/MoviesByGenre';

const Genres = ({ genres }) => {
  let { path } = useRouteMatch();

  return (
    <Container className="genres-container" maxWidth="lg">
      <GenresList genres={genres} />
      <Route
        path={`${path}/:id`}
        component={MoviesByGenre}
      />
    </Container>
  );
};

const mapStateToProps = ({ genres }) => ({
  genres: genres.genres,
});

export default connect(mapStateToProps)(Genres);
