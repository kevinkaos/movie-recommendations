import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getDetails,
  getReviews,
  getCredits,
  getSimilar,
} from '../../modules/movieDetails';
import './movie.scss';

const Movie = ({
  match: {
    params: { id },
  },
  config: {
    backdrop_sizes: imageSizes = [],
    secure_base_url: imageBaseUrl,
  },
  details,
  similarMovies,
  reviews,
  credits,
  getDetails,
  getReviews,
  getCredits,
  getSimilar,
}) => {
  useEffect(() => {
    getDetails(id);
    getReviews(id);
    getCredits(id);
    getSimilar(id);
  }, []);

  const imageSize =
    window.innerWidth > 780 ? imageSizes[3] : imageSizes[1];

  return (
    <div className="movie-page">
      <div className="image-container">
        <img
          src={`${imageBaseUrl}/${imageSize}/${details.backdrop_path}`}
          alt="movie details poster"
        />
      </div>
      <div className="details">
        <h1 className="title">{details.title}</h1>
        <h2 className="tagline">{details.tagline}</h2>
        <div className="info">
          <div className="overview">
            <p>{details.overview}</p>
          </div>
          <div className="specific-details">
            <div className="">
              <span className="">Release Date:</span>
              {details.release_date}
            </div>
            <div className="">
              <span className="">Revenue:</span>$
              {details.revenue}
            </div>
            <div className="">
              <span className="">Budget:</span>$
              {details.budget}
            </div>
            <div className="">
              <span className="">Runtime:</span>
              {details.runtime} Minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ configs, movieDetails }) => ({
  config: configs.config,
  details: movieDetails.details,
  similarMovies: movieDetails.similarMovies,
  reviews: movieDetails.reviews,
  credits: movieDetails.credits,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDetails,
      getReviews,
      getCredits,
      getSimilar,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
