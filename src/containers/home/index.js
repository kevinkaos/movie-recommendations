import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hero from '../../components/Hero'
import { getMovies } from '../../modules/movies'
import './home.scss'

const Home = ({
  config: { backdrop_sizes: imageSizes = [], secure_base_url: imageBaseUrl },
  movies,
  getMovies,
}) => {
  const [type, setType] = useState('popular')

  useEffect(() => {
    getMovies(type)
  }, [type])

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
  ]

  return (
    <div className="page">
      {/* <Hero movies={movies.slice(0, 5)} /> */}
      <div className="content-section">
        <div className="movie-type">
          <ul>
            {movieTypes.map((movieType) => (
              <li
                key={movieType.slug}
                onClick={() => setType(movieType.slug)}
                className={movieType.slug === type ? 'active' : ''}>
                {movieType.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-section-container">
          {movies
            .filter((movie) => movie.poster_path)
            .slice(5)
            .map((movie) => (
              <div className="movie" key={movie.id}>
                <div className="movie-medium">
                  <img
                    src={`${imageBaseUrl}${imageSizes[0]}${movie.poster_path}`}
                    alt="movies-list"
                  />
                </div>
                <div className="movie-info">
                  <h2 className="movie-title">{movie.title}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ reducers, movies }) => ({
  config: reducers.config,
  movies: movies.movies,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
