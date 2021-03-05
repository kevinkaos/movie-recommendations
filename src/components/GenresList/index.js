import React from 'react';
import { Link } from 'react-router-dom';
import './genresList.scss';
import classNames from 'classnames';

const GenresList = ({ genres = [], small }) => {
  return (
    <div
      className={classNames('genres-container', {
        small: small,
      })}
    >
      {genres.map((genre) => (
        <div className="genres-box" key={genre.id}>
          <Link
            className="genres-link"
            to={{
              pathname: `/genres/${genre.id}`,
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
