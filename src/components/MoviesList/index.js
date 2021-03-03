import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import './moviesList.scss';

const MoviesList = ({
  movies = [],
  config: {
    backdrop_sizes: imageSizes = [],
    secure_base_url: imageBaseUrl,
  },
  pageInfo,
  setCurrentPage = () => {},
  pagination = false,
  hero = false,
  currentPage,
  id,
}) => {
  const { total_pages } = pageInfo;
  useEffect(() => {
    setCurrentPage(1);
  }, [id]);

  return (
    <div className="content-section-container">
      {movies
        .filter((movie) => movie.poster_path)
        .slice(hero ? 5 : 0)
        .map((movie, i) => (
          <Fade key={movie.id} bottom delay={200 + i * 50}>
            <div className="movie">
              <Link to={`/movie/${movie.id}`}>
                <div className="movie-medium">
                  <img
                    src={`${imageBaseUrl}${imageSizes[0]}${movie.poster_path}`}
                    alt="movies-list"
                  />
                </div>
                <div className="movie-info">
                  <h2 className="movie-title">
                    {movie.title}
                  </h2>
                </div>
              </Link>
            </div>
          </Fade>
        ))}
      {pagination && (
        <Pagination
          count={total_pages}
          page={currentPage}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
          size="small"
          variant="outlined"
          shape="rounded"
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ configs, movies }) => {
  return {
    config: configs,
    movies: movies.all.results,
    pageInfo: movies.all,
  };
};

export default connect(mapStateToProps)(MoviesList);
