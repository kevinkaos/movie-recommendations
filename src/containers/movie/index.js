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
import { Doughnut } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GenresList from '../../components/GenresList';

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
  credits: { cast = [] },
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

  const options = {
    cutoutPercentage: 75,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  const data = {
    datasets: [
      {
        data: [
          details.vote_average,
          10 - details.vote_average,
        ],
        backgroundColor: ['#4BF', '#000'],
        hoverBackgroundColor: ['#4BF', '#000'],
      },
    ],
  };

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
          <GenresList genres={details.genres} />
          <Grid container>
            <Grid item sm={6} xs={12}>
              <div className="overview">
                <p>{details.overview}</p>
              </div>
            </Grid>
            <Grid
              className="specific-details"
              item
              sm={4}
              xs={6}
            >
              <div>
                <span>Release Date:</span>
                {details.release_date}
              </div>
              <div>
                <span>Revenue:</span>${details.revenue}
              </div>
              <div>
                <span>Budget:</span>${details.budget}
              </div>
              <div>
                <span>Runtime:</span>
                {details.runtime} Minutes
              </div>
            </Grid>
            <Grid
              className="doughnut-chart-container"
              item
              sm={2}
              xs={6}
            >
              <Doughnut data={data} options={options} />
              <div className="score">
                {details.vote_average}
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="cast-section">
          <h2 className="cast-title">Cast</h2>
          <Container
            className="cast-container"
            maxWidth="md"
          >
            {cast
              .slice(0, 6)
              .filter((e) => e.profile_path)
              .map((castMember) => {
                return (
                  <Grid className="cast-item" xs={2}>
                    <img
                      src={`${imageBaseUrl}w264_and_h264_bestv2${castMember.profile_path}`}
                      alt="cast image"
                    />
                    <div className="cast-name">
                      {castMember.name}
                    </div>
                    <div className="cast-character">
                      {castMember.character}
                    </div>
                  </Grid>
                );
              })}
          </Container>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ configs, movieDetails }) => ({
  config: configs,
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
