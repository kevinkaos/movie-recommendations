import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.scss';

const HeroPrevArrow = (props) => (
  <span
    onClick={props.onClick}
    className="slick-arrow prev material-icons"
  >
    arrow_back_ios
  </span>
);

const HeroNextArrow = (props) => (
  <span
    onClick={props.onClick}
    className="slick-arrow next material-icons"
  >
    arrow_forward_ios
  </span>
);

const Hero = ({
  movies,
  config: {
    backdrop_sizes = [],
    secure_base_url: imageBaseUrl,
  },
}) => {
  const imageSize =
    window.innerWidth > 780
      ? backdrop_sizes[3]
      : backdrop_sizes[1];
  const sliderSettings = {
    className: 'hero-container',
    dots: false,
    infinite: true,
    lazyLoad: true,
    nextArrow: <HeroNextArrow />,
    prevArrow: <HeroPrevArrow />,
  };

  const slides = movies.map((movie) => (
    <div key={movie.id}>
      <div className="carousel-info-container">
        <div className="carousel-info">
          <h2 className="title">{movie.title}</h2>
          <p className="overview">{`${movie.overview.substr(
            0,
            150
          )}...`}</p>
          <Link
            to={`movie/${movie.id}`}
            className="read-more-link"
          >
            Read more
          </Link>
        </div>
      </div>
      <img
        src={`${imageBaseUrl}/${imageSize}/${movie.backdrop_path}`}
        alt="movies-carousel-list"
      />
    </div>
  ));
  return (
    slides.length && (
      <Slider {...sliderSettings}>{slides}</Slider>
    )
  );
};

const mapStateToProps = ({ configs }) => {
  return {
    config: configs.config,
  };
};

export default connect(mapStateToProps)(Hero);
