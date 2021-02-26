import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter'
import Hero from '../../components/Hero'
import { getPopularMovies } from '../../modules/movies'
import './home.scss'

const Home = ({
  config,
  count,
  increment,
  incrementAsync,
  isIncrementing,
  decrement,
  decrementAsync,
  isDecrementing,
  changePage,
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
        <h1>Home</h1>
        <p>Count: {count}</p>

        <p>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement}>Decrement</button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>
        <pre>{JSON.stringify(config, undefined, 2)}</pre>
        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = ({ reducers, counter, movies }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  config: reducers.config,
  popularMovies: movies.popularMovies,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      getPopularMovies,
      changePage: () => push('/about-us'),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
