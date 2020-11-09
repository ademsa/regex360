import React from 'react';

export default function LearnQuantifiers() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <p className="mb-2 is-family-code has-text-primary">
          /ab*/g
        </p>
        <p className="mb-2">
          matches character "a", followed by "b" zero or more times.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab+/g
        </p>
        <p className="mb-2">
          matches character "a", followed by "b" one or more times.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab?/g
        </p>
        <p className="mb-2">
          matches character "a", followed by "b" zero or one time.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab&#123;n&#125;/g
        </p>
        <p className="mb-2">
          matches character "a", followed by "b" exactly n times.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab&#123;n,&#125;/g
        </p>
        <p className="mb-2">
          matches character "a", followed by "b" at least n times.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab&#123;n,m&#125;/g
        </p>
        <p className="mb-2">
          match character "a", followed by "b" at at least n and at most m times.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ab*?/g
          <br />
          /ab+?/g
          <br />
          /ab&#123;n&#125;?/g
          <br />
          /ab&#123;n,&#125;?/g
          <br />
          /ab&#123;n,m&#125;?/g
        </p>
        <p className="mb-2">
          Non-greedy (expanding as much as possible) versions of quantifiers listed above. For example:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ow*/g
        </p>
        <p className="mb-2">
          would match:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["ow", "o", "o", "o"]
        </p>
        <p className="mb-2">
          and non-greedy version:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /ow*?/g
        </p>
        <p className="mb-2">
          would match:
        </p>
        <p className="is-family-code has-text-primary">
          ["o, "o", "o", "o"]
        </p>
      </div>
    </React.Fragment >
  );
}
