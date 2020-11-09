import React from 'react';

export default function ExperimentSplitResults(props) {
  return (
    <React.Fragment>
      <div className="columns is-vcentered is-centered">
        <div className="column is-10">
          <div className="box has-text-centered">
            {props.results.length === 0 ?
              <p className="is-size-4 has-text-weight-light">
                No matches with specified pattern.
              </p> :
              <p className="is-size-4 has-text-weight-light">{props.results.join(" | ")}</p>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
