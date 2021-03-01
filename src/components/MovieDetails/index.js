import React from 'react';

const MovieDetails = ({ match }) => {
  return <h1>{match.params.id}</h1>;
};

export default MovieDetails;
