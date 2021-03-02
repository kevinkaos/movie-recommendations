import React from 'react';
import './header.scss';
import { NavLink, withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  return (
    <div className="header">
      <div className="navigation">
        <button
          className="button material-icons"
          onClick={history.goBack}
        >
          arrow_back
        </button>
        <div className="menu">
          <div className="menu-item">
            <NavLink
              exact
              to="/"
              className="menu-link"
              activeClassName="active"
            >
              Movies
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink
              exact
              to="/about-us"
              className="menu-link"
              activeClassName="active"
            >
              TV Shows
            </NavLink>
          </div>
        </div>
        <button className="button material-icons">
          search
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
