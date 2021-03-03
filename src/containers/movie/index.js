import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getDetails,
  getReviews,
  getCredits,
} from '../../modules/movieDetails';
import { getMoviesSimilar } from '../../modules/movies';
import './movie.scss';
import { Doughnut } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GenresList from '../../components/GenresList';
import MoviesList from '../../components/MoviesList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation } from 'swiper';
import ScrollToTop from '../../utils/scrollToTop';

SwiperCore.use([Navigation]);

const Movie = ({
  match: {
    params: { id },
  },
  config: {
    backdrop_sizes: imageSizes = [],
    secure_base_url: imageBaseUrl,
  },
  details,
  reviews,
  credits: { cast = [] },
  getDetails,
  getReviews,
  getCredits,
  getMoviesSimilar,
  movies,
}) => {
  useEffect(() => {
    getDetails(id);
    getReviews(id);
    getCredits(id);
    getMoviesSimilar(id);
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
      <ScrollToTop />
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
            <Swiper navigation slidesPerView={3}>
              {cast
                .filter((e) => e.profile_path)
                .map((castMember) => {
                  return (
                    <SwiperSlide
                      key={castMember.id}
                      className="cast-item"
                    >
                      <Link to={`/person/${castMember.id}`}>
                        <img
                          src={`${imageBaseUrl}w264_and_h264_bestv2${castMember.profile_path}`}
                          alt="cast image"
                        />
                      </Link>
                      <div className="cast-name">
                        {castMember.name}
                      </div>
                      <div className="cast-character">
                        {castMember.character}
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Container>
        </div>
        {reviews && reviews.length > 0 && (
          <div className="reviews-section">
            <h2>Reviews</h2>
            <Container
              className="reviews-container"
              maxWidth="md"
            >
              <Swiper navigation slidesPerView={1}>
                {reviews.map((review) => (
                  <SwiperSlide
                    key={review.id}
                    className="review-item"
                  >
                    <h3 className="review-author">
                      {review.author}
                    </h3>
                    <p className="review-text">
                      {`${review.content.substr(
                        0,
                        300
                      )}...`}
                      <a href={review.url}>Read more</a>
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </div>
        )}
        {movies && movies.length && (
          <div className="similar-movies-section">
            <h2>Similar Movies</h2>
            <Container maxWidth="md">
              <MoviesList />
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  configs,
  movieDetails,
  movies,
}) => ({
  config: configs,
  details: movieDetails.details,
  reviews: movieDetails.reviews.results,
  credits: movieDetails.credits,
  movies: movies.all.results,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDetails,
      getReviews,
      getCredits,
      getMoviesSimilar,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
