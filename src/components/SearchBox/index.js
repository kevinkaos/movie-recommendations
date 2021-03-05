import React, { useState } from 'react';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import callApi from '../../api/apis';
import SearchBoxResults from '../SearchBoxResults';
import './searchBox.scss';
import { connect } from 'react-redux';

const SearchBox = ({ show, genres, config }) => {
  return (
    <div
      className={classNames('search-box', { show: show })}
    >
      <Container
        maxWidth="md"
        className="search-box-container"
      >
        <form>
          <input
            placeholder="Search for movie..."
            className="search-box-input"
            type="text"
            id="search-box"
            // onChange={this.handleChange}
            // ref={this.textInput}
          />
        </form>
        <div
          className={classNames('search-box-results', {
            show: show,
            'no-result': false,
          })}
        >
          {config && (
            <SearchBoxResults
              genres={genres}
              // searchResults={this.state.searchResults}
              config={config}
              // toggleSearchBox={this.props.toggleSearchBox}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ configs, genres }) => ({
  config: configs.config,
  genres: genres.genres,
});

export default connect(mapStateToProps)(SearchBox);
