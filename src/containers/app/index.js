import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movies from '../movies';
import Genres from '../genres';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getConfig } from '../../modules/configs';
import { getGenres } from '../../modules/genres';
import Movie from '../movie';
import Person from '../person';
import '../../index.scss';

const App = ({ getConfig, getGenres }) => {
  useEffect(() => {
    getConfig();
    getGenres();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="container">
        <Route exact path="/" component={Movies} />
        <Route
          path="/movie/:id"
          render={(props) => (
            <Movie {...props} key={props.match.params.id} />
          )}
        />
        <Route
          path="/person/:id"
          render={(props) => (
            <Person
              {...props}
              key={props.match.params.id}
            />
          )}
        />
        <Route path="/genres" component={Genres} />
      </div>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getConfig, getGenres },
    dispatch
  );
};

export default withRouter(
  connect(null, mapDispatchToProps)(App)
);
