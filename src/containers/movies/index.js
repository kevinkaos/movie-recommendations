import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hero from '../../components/Hero';
import { getMovies } from '../../modules/movies';
import './movies.scss';
import ScrollToTop from '../../utils/scrollToTop';
import MoviesList from '../../components/MoviesList';
import MovieTypes from '../../components/MovieTypes';

const Movies = ({ movies, getMovies, pageInfo }) => {
  const { page } = pageInfo;
  const [type, setType] = useState(
    localStorage.getItem('movieType') || 'popular'
  );
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem('currentPage') || page
  );

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
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.all.results,
  pageInfo: movies.all,
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
