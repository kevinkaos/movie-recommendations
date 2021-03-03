import React from 'react';
import { Link } from 'react-router-dom';
import './genresList.scss';

const GenresList = ({ genres = [] }) => {
  return (
    <div className="genres-container">
      {genres.map((genre) => (
        <div className="genres-box" key={genre.id}>
          <Link
            className="genres-link"
            to={{
              pathname: `/genres/${genre.id}`,
            }}
            onClick={() => {
              localStorage.removeItem('genreCurrentPage');
              localStorage.removeItem('currentPage');
            }}
          >
            {genre.name}
          </Link>
          <div
            className={`gradient-background genre-color-${genre.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default GenresList;
