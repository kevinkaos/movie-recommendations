import React from 'react';
import { Link } from 'react-router-dom';
import GenresList from '../GenresList';
import './searchBoxResults.scss';

const SearchBoxResults = ({ results = [], genres }) => {
  return results.map((result) => (
    <Link
      to={path}
      className="result"
      //   onClick={() => props.toggleSearchBox()}
    >
      <img src={'/'} alt="movie search result image" />
      <div className="info-container">
        <span className="title">{result.title}</span>
        <span className="date">{`(${result.release_date})`}</span>
        {genres && <GenresList genres={genres} />}
        <span className="overview">{result.overview}</span>
      </div>
    </Link>
  ));
};

export default SearchBoxResults;
