import React from 'react';

export default function ExperimentTestResults(props) {
  return (
    <React.Fragment>
      <div className="columns is-vcentered is-centered">
        <div className="column is-10">
          <div className="box has-text-centered">
            <p className="is-size-4 has-text-weight-light">{String(props.results)}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
