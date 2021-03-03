import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './moviesByGenre.scss';
import Container from '@material-ui/core/Container';
import MoviesList from '../MoviesList';
import { bindActionCreators } from 'redux';
import { getMoviesByGenre } from '../../modules/movies';

const MoviesByGenre = ({
  match,
  getMoviesByGenre,
  movies,
  genres,
}) => {
  const getGenreName = (genreId) => {
    let name = '';
    genres.forEach((genre) => {
      if (genre.id === Number(genreId)) {
        name = genre.name;
      }
    });
    return name;
  };

  useEffect(() => {
    getMoviesByGenre(match.params.id);
  }, [match.params.id]);

  return (
    <Container maxWidth="lg">
      <h1>{getGenreName(match.params.id)}</h1>
      <MoviesList movies={movies} />
    </Container>
  );
};

const mapStateToProps = ({ movies, genres }) => ({
  movies: movies.all.results,
  genres: genres.genres,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMoviesByGenre,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenre);
