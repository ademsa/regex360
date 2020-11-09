import React from 'react';

export default function LearnAssertions() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <p className="mb-2 has-text-weight-bold">
          "^" is used to match beginning and "$" to match ending of string.
        </p>
        <p className="mb-2">
          For example:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /^The/g
        </p>
        <p className="mb-2">
          should match:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["The"]
        </p>
        <p className="mb-2">
          and
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /dog$/g
        </p>
        <p className="mb-2">
          should match:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["dog"]
        </p>
        <p className="mb-2">
          RegEx patterns can be used with replace method:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          "The quick brown fox jumps over the lazy dog".replace(/dog$/g, "mice");
        </p>
        <p className="mb-2">
          should return new string:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          "The quick brown fox jumps over the lazy mice"
        </p>
        <p className="mb-2">
          In other words, whatever pattern matches it can be replaced with new value.
        </p>
        <p className="mb-2">
          Note: "^" and "$" are also used as part of groups with a bit different meaning (Open 'Groups &amp; Ranges' tab for more details).
        </p>
        <p className="mb-2 has-text-weight-bold">
          "\b" is used to match word boundaries.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\bf/g
        </p>
        <p className="mb-2">
          should match all words that start with "f" character.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /x\b/g
        </p>
        <p className="mb-2">
          should match all words that end with "x" character.
        </p>
        <p className="mb-2 has-text-weight-bold">
          "\B" is used to match NON-word boundaries.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\Bro/g
        </p>
        <p className="mb-2">
          should match all words that contain "ro", that are NOT boundaries.
        </p>
        <p className="mb-2 has-text-weight-bold">
          "Look ahead" and "look behind" assertions
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /l(?=a)/g
        </p>
        <p className="mb-2">
          should match "l" where it is followed by "a".
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /l(?!b)/g
        </p>
        <p className="mb-2">
          should match "l" where it is NOT followed by "b".
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /(?&lt;=ic)k/g
        </p>
        <p className="mb-2">
          should match "k" where it is preceeded by "ic".
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /(?&lt;!do)k/g
        </p>
        <p className="mb-5">
          should match "k" where it is NOT preceeded by "do".
        </p>
        <p>
          All above assertions can be used with one or more characters.
        </p>
      </div>
    </React.Fragment>
  );
}
