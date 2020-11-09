import React from 'react';

export default function ExperimentControls(props) {
  return (
    <React.Fragment>
      <div className="columns is-vcentered is-centered">
        <div className="column is-10">
          <div className="box bg-lg-rtl box-operations">
            <div className="columns is-centered has-text-white is-variable is-2">
              <div className="column is-5">
                <textarea className="textarea is-family-code" placeholder="RegEx" ref={props.patternRef} value={props.pattern} onChange={props.handlePatternChange}></textarea>
                <div className="columns is-variable is-2 mt-1">
                  <div className="column is-3">
                    <div className="field">
                      <div className="control">
                        <input className="input is-family-code" type="text" placeholder="Flags" value={props.flags} onChange={props.handleFlagsChange} />
                      </div>
                    </div>
                  </div>
                  <div className="column is-9">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Replace matches with string" value={props.replace} onChange={props.handleReplaceChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-7">
                <textarea className="textarea" placeholder="String" value={props.text} onChange={props.handleTextChange}></textarea>
                <div className="buttons is-left mt-4 is-flex">
                  <button className="button is-outlined is-primary is-inverted mr-4 incr-width-as-possible" onClick={props.handleMatchPattern}>
                    <span className="icon mr-1"><i className="la la-lg la-play"></i></span>
                    Match
                  </button>
                  <button className="button is-outlined is-primary is-inverted mr-4" onClick={props.handleTestPattern}>
                    <span className="icon mr-1"><i className="la la-lg la-check"></i></span>
                    Test
                  </button>
                  <button className="button is-outlined is-primary is-inverted mr-4" onClick={props.handleReplacePattern}>
                    <span className="icon mr-1"><i className="la la-lg la-sync"></i></span>
                    Replace
                  </button>
                  <button className="button is-outlined is-primary is-inverted mr-4" onClick={props.handleSplitPattern}>
                    <span className="icon mr-1"><i className="la la-lg la-divide"></i></span>
                    Split
                  </button>
                  <button className="button is-outlined is-primary is-inverted mr-4" onClick={props.handleResetPattern}>
                    <span className="icon"><i className="la la-lg la-trash"></i></span>
                  </button>
                  <div className="dropdown is-hoverable" role="menu">
                    <div className="dropdown-trigger" controls="dropdown-menu">
                      <button className="button is-outlined is-primary is-inverted is-fullwidth">
                        <span className="icon"><i className="la la-lg la-list"></i></span>
                      </button>
                    </div>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item has-text-centered py-0 px-3 my-0">
                          <button className="button is-outlined is-primary is-full-width" data-sample="0" onClick={props.handleSamplesClick}>The quick brown fox...</button>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item has-text-centered py-0 px-3 my-0">
                          <button className="button is-outlined is-primary is-full-width" data-sample="1" onClick={props.handleSamplesClick}>Lorem ipsum dolor sit...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
