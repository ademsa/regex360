import React from 'react';

export default function LearnGroupsAndRanges() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <p className="mb-2 is-family-code has-text-primary">
          /a|b/g
        </p>
        <p className="mb-2">
          matches "a" OR "b" in string.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /[abc]/g
        </p>
        <p className="mb-2">
          matches any character from set ("a", "b" OR "c").
          Alternatively you can write this as [a-c].
          "-" means all characters in alphabet in range from "a" until "c".
          This is applicable also to other types of characters (numbers, etc.).
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /[^abc]/g
        </p>
        <p className="mb-2">
          match any character NOT from set ("a", "b" OR "c").
          Alternatively you can write this as [^a-c].
          This is applicable also to other types of characters (numbers, etc.).
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /(a)/g
        </p>
        <p className="mb-2">
          matches character "a" as capturing group and remembers it for later usage.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\n/g
        </p>
        <p className="mb-2">
          references capturing group by it's number ("n"). For example:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /brown(\s)fox&#92;1jumps/g
        </p>
        <p className="mb-2">
          matches substring which starts with "brown",
          captures group with space character "\s" and then reuses it later in pattern.
          The result should be:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["brown fox jumps"]
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /(?&lt;cg1&gt;a)/g
        </p>
        <p className="mb-2">
          matches character "a" as capturing group with name "cg1" and
          remembers it for later usage.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\k&lt;cg1&gt;/g
        </p>
        <p className="mb-2">
          references capturing group by it's name ("cg1"). For example:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /brown(?&lt;cg1&gt;\s)fox\k&lt;cg1&gt;jumps/g
        </p>
        <p className="mb-2">
          matches substring which starts with "brown",
          captures group with space character ("\s") and name "cg1" and
          then reuses it later in pattern with "\k&lt;cg1&gt;".
          The result should be:
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          ["brown fox jumps"]
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /(?:a)/g
        </p>
        <p>
          matches character "a" as capturing group and DOES NOT remember it for later usage.
        </p>
      </div>
    </React.Fragment >
  );
}
