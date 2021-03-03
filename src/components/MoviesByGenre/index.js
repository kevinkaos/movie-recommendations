import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './moviesByGenre.scss';
import Container from '@material-ui/core/Container';
import MoviesList from '../MoviesList';
import { bindActionCreators } from 'redux';
import { getMoviesByGenre } from '../../modules/movies';

const MoviesByGenre = ({
  match,
  getMoviesByGenre,
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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMoviesByGenre(match.params.id, currentPage);
  }, [match.params.id, currentPage]);

  return (
    <Container maxWidth="lg">
      <h1>{getGenreName(match.params.id)}</h1>
      <MoviesList
        id={match.params.id}
        pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

const mapStateToProps = ({ genres }) => ({
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
