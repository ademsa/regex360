import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer py-5">
                <div className="content has-text-centered grey-light">
                    <p className="has-text-weight-light my-0 is-size-7">
                        Source code available <a href="https://github.com/ademsa/regex360">here</a> (<a href="https://github.com/ademsa/regex360/blob/main/LICENSE.md">MIT license</a>).
                        <br />
                        Icons from <a href="https://icons8.com/line-awesome">Icons8 Line Awesome</a> collection.
                    </p>
                    <p className="has-text-weight-light mt-2 is-size-7">
                        Developed by
                    </p>
                    <a href="https://ademsa.github.io">
                        <img className="author" src="/regex360/author.svg" alt="Author" />
                    </a>
                    <p className="has-text-weight-light my-2 is-size-7">
                        Other projects
                    </p>
                    <a href="https://ademsa.github.io/browser-dashboard" className="mx-2 has-text-weight-normal">Browser Dashboard</a>
                    <a href="https://ademsa.github.io/web-page-data" className="has-text-weight-normal">Web Page Data</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
