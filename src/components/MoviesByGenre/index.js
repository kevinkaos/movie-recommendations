import React from 'react';
import { connect } from 'react-redux';
import './moviesByGenre.scss';
import Container from '@material-ui/core/Container';

const MoviesByGenre = () => {
  return (
    <Container maxWidth="lg">
      <h1>hi</h1>
    </Container>
  );
};

export default connect()(MoviesByGenre);
