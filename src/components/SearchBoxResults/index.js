import React from 'react';
import { Link } from 'react-router-dom';
import GenresList from '../GenresList';
import './searchBoxResults.scss';

const SearchBoxResults = ({
  config: {
    logo_sizes: imageSizes,
    secure_base_url: imageBaseUrl,
  },
  results = [],
  genres,
}) => {
  return results.map((result) => {
    const genreList = genres.reduce((arr, curr) => {
      result.genre_ids.forEach((genreId) => {
        if (curr.id === genreId) {
          arr.push(curr);
        }
      });
      return arr;
    }, []);
    return (
      <Link
        to={`/movie/${result.id}`}
        className="result"
        key={result.id}
      >
        <div className="image-container">
          <img
            src={`${imageBaseUrl}${imageSizes[0]}/${result.poster_path}`}
            alt=""
          />
        </div>
        <div className="info-container">
          <span className="title">{result.title}</span>
          <span className="date">{`(${result.release_date})`}</span>
          {genres && genreList && (
            <GenresList small genres={genreList} />
          )}
          <span className="overview">
            {result.overview}
          </span>
        </div>
      </Link>
    );
  });
};

export default SearchBoxResults;
