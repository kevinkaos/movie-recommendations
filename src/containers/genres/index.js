import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

const Genres = ({ genres }) => {
  return (
    <Container maxWidth="lg">
      <div>
        <h1>About Page</h1>
        <p>Did you get here via Redux?</p>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ genres }) => ({
  genres,
});

export default connect(mapStateToProps)(Genres);
