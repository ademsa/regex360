import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-10">
              <nav className="navbar is-mobile">
                <div className="navbar-brand has-text-centered">
                  <div className="navbar-item mt-1">
                    <Link to="/">
                      <img src="/regex360/logo.svg" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="navbar-end has-text-centered-mobile has-text-centered-tablet">
                  <Link className="navbar-item" to="/home">
                    <span className="icon mr-1">
                      <i className="la la-lg la-home"></i>
                    </span>
                    <span className="navbar-item-link-text">Home</span>
                  </Link>
                  <Link className="navbar-item" to="/learn">
                    <span className="icon mr-1">
                      <i className="la la-lg la-book-reader"></i>
                    </span>
                    <span className="navbar-item-link-text">Learn</span>
                  </Link>
                  <Link className="navbar-item" to="/reference">
                    <span className="icon mr-1">
                      <i className="la la-lg la-book"></i>
                    </span>
                    <span className="navbar-item-link-text">Reference</span>
                  </Link>
                  <Link className="navbar-item" to="/experiment">
                    <span className="icon mr-1">
                      <i className="la la-lg la-play"></i>
                    </span>
                    <span className="navbar-item-link-text">Experiment</span>
                  </Link>
                  <Link className="navbar-item" to="/recipes">
                    <span className="icon mr-1">
                      <i className="la la-lg la-list"></i>
                    </span>
                    <span className="navbar-item-link-text">Recipes</span>
                  </Link>
                  <Link className="navbar-item" to="/resources">
                    <span className="icon mr-1">
                      <i className="la la-lg la-bookmark"></i>
                    </span>
                    <span className="navbar-item-link-text">Resources</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
