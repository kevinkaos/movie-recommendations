import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hero from '../../components/Hero';
import { getMovies } from '../../modules/movies';
import './home.scss';
import Fade from 'react-reveal/Fade';
import { useHistory, Link } from 'react-router-dom';

const Home = ({
  config: {
    backdrop_sizes: imageSizes = [],
    secure_base_url: imageBaseUrl,
  },
  movies,
  getMovies,
}) => {
  const [type, setType] = useState(
    localStorage.getItem('movieType') || 'popular'
  );
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('movieType');
  }, []);

  useEffect(() => {
    getMovies(type);
  }, [type]);

  const movieTypes = [
    {
      title: 'Popular',
      slug: 'popular',
    },
    {
      title: 'Top Rated',
      slug: 'top_rated',
    },
    {
      title: 'Now Playing',
      slug: 'now_playing',
    },
    {
      title: 'Upcoming',
      slug: 'upcoming',
    },
  ];

  return (
    <div className="page">
      <Fade top delay={500}>
        <Hero
          movies={movies
            .filter((movie) => movie.backdrop_path)
            .slice(0, 5)}
        />
      </Fade>
      <div className="content-section">
        <div className="movie-type">
          <ul>
            {movieTypes.map((movieType) => (
              <li
                key={movieType.slug}
                onClick={() => {
                  setType(movieType.slug);
                  localStorage.setItem(
                    'movieType',
                    movieType.slug
                  );
                  return history.go(0);
                }}
                className={
                  movieType.slug === type ? 'active' : ''
                }
              >
                {movieType.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-section-container">
          {movies
            .filter((movie) => movie.poster_path)
            .slice(5)
            .map((movie, i) => (
              <Fade key={movie.id} bottom delay={100 * i}>
                <div className="movie">
                  <Link to={`movie/${movie.id}`}>
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ reducers, movies }) => ({
  config: reducers.config,
  movies: movies.movies,
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
)(Home);
