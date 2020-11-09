import React from 'react';

export default function LearnMisc() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <p className="mb-2 has-text-weight-bold">
          "\p" is used to match characters that belong to specific unicode property / category.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\p&#123;Emoji&#125;/gu;
        </p>
        <p className="mb-2">
          should match all emojis in string.
        </p>
        <p className="mb-2">
          Notice that "u" flag is used to indicate that matching should be performed on unicode string.
        </p>
        <p className="mb-2">
          There are number of categories that you can match ("White_Space", "Decimal_Number", etc.).
          List of properties / categories is available <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt">here</a>.
        </p>
        <p className="mb-2 has-text-weight-bold">
          "\P" is used to match characters that are do NOT belong to specific unicode property / category.
        </p>
        <p className="mb-2 is-family-code has-text-primary">
          /\P&#123;Alpha&#125;/gu;
        </p>
        <p>
          to match characters that are NOT from alphabet.
        </p>
      </div>
    </React.Fragment >
  );
}
