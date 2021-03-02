import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../home';
import About from '../about';
import Header from '../../components/Header';
import { getConfig } from '../../modules/configs';
import Movie from '../movie';
import '../../index.scss';

const App = ({ getConfig }) => {
  useEffect(() => {
    getConfig();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
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
  return bindActionCreators({ getConfig }, dispatch);
};

export default withRouter(
  connect(null, mapDispatchToProps)(App)
);
