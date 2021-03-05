import React from 'react';
import githubLogo from '../../img/github.svg';
import tmdbLogo from '../../img/tmdb.svg';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="tmdb"
        src={tmdbLogo}
        alt="The movie database logo"
      />
      <a
        href="https://github.com/kevinkaos/movie-recommendations"
        className="github-logo"
      >
        <img
          className="github"
          src={githubLogo}
          alt="github logo"
        />
      </a>
    </div>
  );
};

export default Footer;
