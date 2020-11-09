import React from 'react';
import { Link } from 'react-router-dom';

export default function LearnCharacterClasses() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <p className="mb-2 has-text-weight-bold">
          Character Classes are used to differentiate types of characters.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /./g
        </p>
        <p className="mb-2">
          matches any single character except line terminators.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\d/g
        </p>
        <p className="mb-2">
          matches any digit.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\D/g
        </p>
        <p className="mb-2">
          matches any non-digit character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\w/g
        </p>
        <p className="mb-2">
          matches any alphanumeric character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\W/g
        </p>
        <p className="mb-2">
          matches any non-alphanumeric character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\s/g
        </p>
        <p className="mb-2">
          matches white space character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\S/g
        </p>
        <p className="mb-2">
          matches any non-white space character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\t/g
        </p>
        <p className="mb-2">
          matches horizontal tab.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\n/g
        </p>
        <p className="mb-2">
          matches line ending.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /[\b]/g
        </p>
        <p className="mb-2">
          matches backspace.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\0/g
        </p>
        <p className="mb-2">
          matches NUL character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\u&#123;1F600&#125;/gu
        </p>
        <p className="mb-2">
          matches unicode character 1F600 or <span role="img" aria-label="emoji">😀</span> emoji.
        </p>
        <p className="mb-5">
          "\" is used as "escape" character. For example, "\b" indicates it should match word boundary and not (only) "b" character.
        </p>
        <p>
          Open <Link to="/experiment">Experiment</Link> page and try these character clases on sample sentences available there.
        </p>
      </div>
    </React.Fragment >
  );
}
