import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import callApi from '../../api/apis';
import SearchBoxResults from '../SearchBoxResults';
import './searchBox.scss';
import { connect } from 'react-redux';

const SearchBox = ({
  show,
  genres,
  config,
  toggleSearchBox,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const getMoviesFromQuery = (query) => {
    if (query === '' || query.trim === '' || !query) {
      return;
    }

    callApi.movie.searchMovie(query).then((res) => {
      setSearchResults(res.data.results);
    });
  };

  useEffect(() => {
    getMoviesFromQuery(query);
  }, [query]);

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
            placeholder="Search for movies..."
            className="search-box-input"
            type="text"
            id="search-box"
            onChange={(e) => setQuery(e.target.value)}
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
              results={searchResults}
              config={config}
              toggleSearchBox={toggleSearchBox}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ configs, genres }) => ({
  config: configs,
  genres: genres.genres,
});

export default connect(mapStateToProps)(SearchBox);
