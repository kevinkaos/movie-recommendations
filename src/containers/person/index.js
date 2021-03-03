import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPersonDetails } from '../../modules/person';
import { getPersonMovies } from '../../modules/movies';
import Container from '@material-ui/core/Container';
import './person.scss';
import MoviesList from '../../components/MoviesList';
import ScrollToTop from '../../utils/scrollToTop';

const Person = ({
  getPersonMovies,
  getPersonDetails,
  config: { secure_base_url: imageBaseUrl },
  details,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getPersonMovies(id);
    getPersonDetails(id);
  }, []);
  return (
    <Container className="person-container" maxWidth="md">
      <ScrollToTop />
      <div className="person-inner">
        <div className="person-image">
          <img
            src={`${imageBaseUrl}w300${details.profile_path}`}
            alt="actor picture"
          />
        </div>
        <div className="person-details">
          <div className="person-name">{details.name}</div>
          {details.birthday && (
            <div className="person-item">
              <span>Birthday : </span>
              {details.birthday}
            </div>
          )}
          {details.place_of_birth && (
            <div className="person-item">
              <span>Place of birth : </span>
              {details.place_of_birth}
            </div>
          )}
          {details.biography && (
            <div className="person-biography">
              <span>Biography : </span>
              {details.biography}
            </div>
          )}
        </div>
      </div>
      <div className="related-movies">
        <div className="related-movies-title">
          <h2>Other movies by this actor</h2>
        </div>
        <MoviesList />
      </div>
    </Container>
  );
};

const mapStateToProps = ({ configs, person }) => ({
  config: configs,
  details: person.details,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPersonDetails,
      getPersonMovies,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
