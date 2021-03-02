import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../home';
import Genres from '../genres';
import Header from '../../components/Header';
import { getConfig } from '../../modules/configs';
import { getGenres } from '../../modules/genres';
import Movie from '../movie';
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
        <Route exact path="/" component={Home} />
        <Route exact path="/genres" component={Genres} />
        <Route
          path="/movie/:id"
          render={(props) => (
            <Movie {...props} key={props.match.params.id} />
          )}
        />
      </div>
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
