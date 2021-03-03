import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hero from '../../components/Hero';
import { getMovies } from '../../modules/movies';
import './movies.scss';
import ScrollToTop from '../../utils/scrollToTop';
import MoviesList from '../../components/MoviesList';
import MovieTypes from '../../components/MovieTypes';

const Movies = ({ movies, getMovies }) => {
  const [type, setType] = useState(
    localStorage.getItem('movieType') || 'popular'
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.removeItem('movieType');
  }, []);

  useEffect(() => {
    getMovies(type, currentPage);
  }, [type, currentPage]);

  return (
    <div className="page">
      <ScrollToTop />
      <Hero
        movies={movies
          .filter((movie) => movie.backdrop_path)
          .slice(0, 5)}
      />
      <div className="content-section">
        <MovieTypes
          type={type}
          setType={setType}
          setCurrentPage={setCurrentPage}
        />
        <MoviesList
          pagination
          hero
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.all.results,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
