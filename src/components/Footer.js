import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer py-5">
        <div className="content has-text-centered grey-light">
          <p className="has-text-weight-light my-0 is-size-7">
            Source code available{" "}
            <a href="https://github.com/ademsa/regex360">here</a> (
            <a href="https://github.com/ademsa/regex360/blob/main/LICENSE.md">
              MIT license
            </a>
            ).
            <br />
            Icons from{" "}
            <a href="https://icons8.com/line-awesome">
              Icons8 Line Awesome
            </a>{" "}
            collection.
            <br />
            Hosted on <a href="https://pages.github.com/">GitHub Pages</a>{" "}
          </p>
          <br />
          <a className="mt-2" href="https://ademsabic.com">
            <img className="author" src="/regex360/author.svg" alt="Author" />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
