import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeIntroduction() {
  return (
    <React.Fragment>
      <section className="hero is-primary is-fullheight" id="introduction">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-centered">
              <div className="column is-8 has-text-centered">
                <p className="is-size-3-mobile is-size-2-tablet is-size-1-desktop">
                  REGular EXpressions are patterns used for searching (matching) and replacing parts of strings.
                </p>
                <p className="is-size-5 my-5">
                  This capability is often used for data extraction, tranformation, highlighting, validation, etc.
                </p>
                <p className="is-size-5 my-5">
                  RegEx-like functionality is implemented in standard libraries of many programming languages
                  and supported as input of many tools.
                  We'll focus on JavaScript implementation of RegEx.
                </p>
                <p className="is-size-5 mt-5 mb-3">
                  Quick Example
                </p>
                <p className="is-size-5 mb-3 has-text-weight-light has-text-warning is-family-code">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="is-size-5 mb-3">
                  To match all strings that have three characters starting with f:
                </p>
                <p className="is-size-5 mb-3 has-text-weight-light has-text-warning is-family-code">
                  var pattern = new RegExp("f..", "g");
                  <br />
                  var result = "The quick brown fox jumps over the lazy dog".match(pattern);
                </p>
                <p className="is-size-5 mb-3">
                  Value of result variable should be:
                </p>
                <p className="is-size-5 has-text-weight-light has-text-warning is-family-code mb-3">
                  ["fox"]
                </p>
                <p className="is-size-5">
                  Nice right?
                </p>
                <Link to="/learn">
                  <button className="button is-primary is-outlined is-inverted is-rounded mt-5">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
