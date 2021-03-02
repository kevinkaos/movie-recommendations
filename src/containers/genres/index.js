import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import './genres.scss';
import GenresList from '../../components/GenresList';

const Genres = ({ genres }) => {
  return (
    <Container className="genres-container" maxWidth="lg">
      <GenresList genres={genres} />
    </Container>
  );
};

const mapStateToProps = ({ genres }) => ({
  genres: genres.genres,
});

export default connect(mapStateToProps)(Genres);
