import React from 'react';

export default function Resources() {
  React.useEffect(() => {
    document.title = "RegEx360 - Resources";
  }, []);

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-10">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-6">
                  <div className="tile is-parent">
                    <div className="tile is-child box bg-rrg-bl is-full-width has-text-centered">
                      <p className="title is-size-4 has-text-white has-text-centered">Docs</p>
                      <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" rel="noopener noreferrer">MDN - Regular expressions</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Regular_expression" rel="noopener noreferrer">Wikipedia - Regular expression</a></li>
                        <li><a href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp" rel="noopener noreferrer">W3 Schools - JavaScript RegExp Reference</a></li>
                        <li><a href="https://tc39.es/ecma262/#sec-regexp-regular-expression-objects" rel="noopener noreferrer">ECMAScript 2021 Lang. Spec. - RegExp (Regular Expression) Objects</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box bg-rrg-tl is-full-width has-text-centered">
                      <p className="title is-size-4 has-text-white has-text-centered">Misc</p>
                      <ul>
                        <li><a href="https://github.com/search?l=JavaScript&q=regex&type=Repositories" rel="noopener noreferrer">RegEx-related repositories on GitHub</a></li>
                        <li><a href="https://gist.github.com/search?l=JavaScript&q=regex" rel="noopener noreferrer">RegEx-related gists on GitHub</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet" rel="noopener noreferrer">Regular expression syntax cheatsheet (Mozilla)</a></li>
                        <li><a href="https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285" rel="noopener noreferrer">Regex tutorial — A quick cheatsheet by examples</a></li>
                        <li><a href="https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1" rel="noopener noreferrer">Regex cookbook — Top 10 Most wanted regex</a></li>
                        <li><a href="https://towardsdatascience.com/regex-cheat-sheet-python-3dd0c4b5b4c6" rel="noopener noreferrer">RegEx Cheat Sheet — Python</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tile is-vertical is-6">
                  <div className="tile is-parent">
                    <div className="tile is-child box bg-lg-rtl is-full-width has-text-centered">
                      <p className="title is-size-4 has-text-white has-text-centered">Videos</p>
                      <ul>
                        <li><a href="https://www.youtube.com/results?search_query=regex+javascript" rel="noopener noreferrer">RegEx-related videos on YouTube</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box bg-lg-rtl is-full-width has-text-centered">
                      <p className="title is-size-4 has-text-white has-text-centered">Tools</p>
                      <ul>
                        <li><a href="https://regexr.com/" rel="noopener noreferrer">RegExr</a></li>
                        <li><a href="https://regex101.com/" rel="noopener noreferrer">RegEx101</a></li>
                        <li><a href="https://extendsclass.com/regex-tester.html" rel="noopener noreferrer">RegEx Tester</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box bg-lg-rtl is-full-width has-text-centered">
                      <p className="title is-size-4 has-text-white has-text-centered">Practice</p>
                      <ul>
                        <li><a href="https://www.hackerrank.com/domains/regex" rel="noopener noreferrer">RegEx challenges on HackerRank</a></li>
                        <li><a href="https://leetcode.com/problems/regular-expression-matching/" rel="noopener noreferrer">RegEx challenge on LeetCode</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
