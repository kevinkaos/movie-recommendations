import React, { useEffect } from 'react'
// import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hero from '../../components/Hero'
import { getPopularMovies } from '../../modules/movies'
import './home.scss'

const Home = ({
  config: { backdrop_sizes: imageSizes = [], secure_base_url: imageBaseUrl },
  popularMovies,
  getPopularMovies,
}) => {
  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <div className="page">
      <Hero movies={popularMovies.slice(0, 5)} />
      <div className="content-section">
        <div className="content-section-container">
          {popularMovies.slice(5).map((movie) => (
            <div className="movie" key={movie.id}>
              <div className="movie-medium">
                <img
                  src={`${imageBaseUrl}${imageSizes[0]}${movie.poster_path}`}
                  alt="movies-list"
                />
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
  popularMovies: movies.popularMovies,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPopularMovies,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
