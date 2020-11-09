import React from 'react';
import { recipeGroups } from './../core/recipes'

export default function RecipesFilter(props) {
  return (
    <React.Fragment>
      <div className="columns is-vcentered is-centered">
        <div className="column is-10">
          <div className="box bg-lg-rtl box-operations">
            <div className="columns is-vcentered is-centered has-text-white is-variable is-2">
              <div className="column is-quarter">
                <div className="field">
                  <label className="label has-text-white">Filter by description</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Description" ref={props.filterByDescriptionRef} onKeyDown={props.handleFilterByDescriptionKeyDown} />
                  </div>
                  <p className="help">Min. 3 characters</p>
                </div>
              </div>
              <div className="column is-quarter">
                <div className="field">
                  <label className="label has-text-white">Filter by group</label>
                  <div className="control">
                    <div className="select is-full-width">
                      <select className="is-full-width" onChange={props.handleFilterByGroupChange}>
                        <option value={0}></option>
                        {recipeGroups && recipeGroups.map(item =>
                          <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <p className="help">&nbsp;</p>
                </div>
              </div>
              <div className="column is-narrow">
                <div className="field">
                  <label className="label has-text-white">&nbsp;</label>
                  <div className="control">
                    <button className="button is-primary is-inverted is-full-width" onClick={props.handleFilterClick}>
                      <span className="icon mr-1"><i className="la la-lg la-filter"></i></span>
                            Filter
                          </button>
                  </div>
                  <p className="help">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
