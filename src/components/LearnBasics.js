import React from 'react';
import { Link } from 'react-router-dom';

export default function LearnBasics() {
  return (
    <React.Fragment>
      <div className="box mb-3 has-text-justified">
        <p className="mb-2">
          In JavaScript, regular expressions can be defined in two ways:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          let regex = /f../g;
        </p>
        <p className="mb-2">
          or
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          let regex = new RegExp("f..", "g");
        </p>
        <p className="mb-2">
          Either way, they can be used as follows:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          let result = "The quick brown fox jumps over the lazy dog".match(regex);
        </p>
        <p className="mb-2">
          Returning same value / match:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["fox"]
        </p>
        <p className="mb-2">
          RegExp object provides additional methods and properties (Open 'Methods and Properties' tab for more details).
          This tutorial will use first approach for examples.
          It is easy to convert to second one since flags and patterns are split with '/' character.
        </p>
        <p className="mb-2">
          One thing that was not explained is the "g" character in both expressions.
          In RegEx vocabular it is called flag and indicates how the matching is performed on string.
        </p>
        <p className="mb-2">
          You may want to look at <Link to="/reference?g=Flags">Reference (Flags)</Link> page
          for more details about each flag available.
        </p>
        <p className="mb-5">
          If "g" flag was not in expressions from above,
          then only first occurence / match would be returned and rest of the string would be ignored.
        </p>
        <p>
          Let's start!
        </p>
      </div>
    </React.Fragment >
  );
}
