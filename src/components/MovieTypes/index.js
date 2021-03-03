import React from 'react';
import './movieTypes.scss';

const MovieTypes = ({ setType, setCurrentPage, type }) => {
  const movieTypes = [
    {
      title: 'Popular',
      slug: 'popular',
    },
    {
      title: 'Top Rated',
      slug: 'top_rated',
    },
    {
      title: 'Now Playing',
      slug: 'now_playing',
    },
    {
      title: 'Upcoming',
      slug: 'upcoming',
    },
  ];

  return (
    <div className="movie-type">
      <ul>
        {movieTypes.map((movieType) => (
          <li
            key={movieType.slug}
            onClick={() => {
              setCurrentPage(1);
              setType(movieType.slug);
              localStorage.setItem(
                'movieType',
                movieType.slug
              );
            }}
            className={
              movieType.slug === type ? 'active' : ''
            }
          >
            {movieType.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTypes;
