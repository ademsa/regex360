import React from 'react';
import { Link } from 'react-router-dom';
import RecipesFilter from './RecipesFilter'
import { recipes } from './../core/recipes'

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    document.title = "RegEx360 - Recipes";

    this.state = {
      recipes: recipes,
      filterByDescription: "",
      filterByGroup: 0,
    };

    this.filterByDescriptionRef = React.createRef();

    this.handleFilterByDescriptionKeyDown = this.handleFilterByDescriptionKeyDown.bind(this);
    this.handleFilterByGroupChange = this.handleFilterByGroupChange.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.filter = this.filter.bind(this);

    this.handleCopyRecipeClick = this.handleCopyRecipeClick.bind(this);
  }

  handleFilterByDescriptionKeyDown(event) {
    if (event.keyCode !== 13 && event.key !== "Enter") {
      return;
    }

    let description = this.filterByDescriptionRef.current.value;
    this.setState(prevState => ({
      ...prevState,
      filterByDescription: description,
    }), () => {
      if (description.length >= 3) {
        this.filter();
      }
    });
  }

  handleFilterByGroupChange(event) {
    let group = parseInt(event.currentTarget.value);
    this.setState(prevState => ({
      ...prevState,
      filterByGroup: group,
    }), () => this.filter());
  }

  handleFilterClick() {
    let description = this.filterByDescriptionRef.current.value;
    this.setState(prevState => ({
      ...prevState,
      filterByDescription: description,
    }), () => this.filter());
  }

  filter() {
    let filteredRecipes = recipes;
    if (this.state.filterByGroup > 0) {
      filteredRecipes = filteredRecipes.filter(r => r.group === this.state.filterByGroup);
    }
    if (this.state.filterByDescription !== "") {
      filteredRecipes = filteredRecipes.filter(r => r.description.indexOf(this.state.filterByDescription) > -1);
    }
    this.setState(prevState => ({
      ...prevState,
      recipes: filteredRecipes,
    }));
  }

  handleCopyRecipeClick(event) {
    let target = event.currentTarget;
    let recipeId = parseInt(target.dataset.recipeid);
    let recipe = "/" + recipes[recipeId].pattern + "/" + recipes[recipeId].flags;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(recipe);
      target.className = "button is-success is-small mr-2";
      setTimeout(() => {
        target.className = "button is-primary is-outlined is-small mr-2"
      }, 1000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <RecipesFilter
              filterByDescriptionRef={this.filterByDescriptionRef}
              handleFilterByDescriptionKeyDown={this.handleFilterByDescriptionKeyDown}
              handleFilterByGroupChange={this.handleFilterByGroupChange}
              handleFilterClick={this.handleFilterClick} />

            <div className="columns is-vcentered is-centered">
              <div className="column is-10">
                <div className="box">
                  <table className="table is-fullwidth">
                    <colgroup>
                      <col width="30%"></col>
                      <col width="10%"></col>
                      <col width="50%"></col>
                      <col width="10%"></col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Pattern</th>
                        <th>Flags</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.recipes && this.state.recipes.map((item, idx) =>
                        <tr key={idx}>
                          <td className="is-family-code">{item.pattern}</td>
                          <td className="is-family-code">{item.flags}</td>
                          <td>{item.description}</td>
                          <td>
                            <button className="button is-primary is-outlined is-small mb-2 mr-2" data-recipeid={idx} onClick={this.handleCopyRecipeClick}>
                              <span className="icon"><i className="la la-lg la-copy"></i></span>
                            </button>
                            <Link to={"/experiment?r=" + idx}>
                              <button className="button is-primary is-outlined is-small mb-2">
                                <span className="icon"><i className="la la-lg la-play"></i></span>
                              </button>
                            </Link>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
