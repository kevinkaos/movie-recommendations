import React from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hero.scss'

const HeroPrevArrow = ({ onClick }) => (
  <i onClick={onClick} className="slick-arrow slick-prev material-icons">
    chevron_left
  </i>
)

const HeroNextArrow = ({ onClick }) => (
  <i onClick={onClick} className="slick-arrow slick-next material-icons">
    chevron_right
  </i>
)

const Hero = ({
  movies,
  config: { backdrop_sizes = [], secure_base_url: imageBaseUrl },
}) => {
  const imageSize =
    window.innerWidth > 780 ? backdrop_sizes[3] : backdrop_sizes[1]
  const sliderSettings = {
    className: 'hero-container',
    dots: false,
    infinite: true,
    lazyLoad: true,
    nextArrow: <HeroNextArrow />,
    prevArrow: <HeroPrevArrow />,
  }

  const slides = movies.map((movie) => (
    <div key={movie.id}>
      <img
        src={`${imageBaseUrl}/${imageSize}/${movie.backdrop_path}`}
        alt="movies-carousel-list"
      />
    </div>
  ))
  return slides.length && <Slider {...sliderSettings}>{slides}</Slider>
}

const mapStateToProps = ({ reducers }) => {
  return {
    config: reducers.config,
  }
}

export default connect(mapStateToProps)(Hero)
