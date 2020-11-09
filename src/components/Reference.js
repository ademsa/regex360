import React from 'react';
import reference from './../core/reference'

export default class Reference extends React.Component {
  constructor(props) {
    super(props);

    document.title = "RegEx360 - Reference";

    this.state = {
      reference: [],
      referenceFilter: false
    }

    this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  handleClearFilter() {
    this.setState(prevState => ({
      ...prevState,
      reference: reference,
      referenceFilter: false,
    }));
  }

  componentDidMount() {
    let group = "";
    let referenceItems = reference;
    try {
      group = window.location.href.split("?")[1].split("=")[1]
      if (group !== "") {
        referenceItems = reference.filter(item => item.group.replaceAll(" ", "-") === group);
      }
    } catch (error) {
      referenceItems = reference
    } finally {
      this.setState(prevState => ({
        ...prevState,
        reference: referenceItems,
        referenceFilter: group !== "" ? true : false,
      }));
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered is-centered">
              <div className="column is-10">
                <div className="box">
                  <table className="table is-fullwidth">
                    <colgroup>
                      <col width="5%"></col>
                      <col width="15%"></col>
                      <col width="50%"></col>
                      <col width="30%"></col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th>
                          {this.state.referenceFilter &&
                            <button className="button is-small is-primary is-outlined is-rounded" onClick={this.handleClearFilter}>Show All</button>
                          }
                        </th>
                        <th className="p-3">Group</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">External References</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.reference && this.state.reference.map((item, idx) =>
                        <tr key={idx}>
                          <td className="is-family-code has-text-centered">{item.expression}</td>
                          <td>{item.group}</td>
                          <td>{item.description}</td>
                          <td>
                            <ul>
                              {item.links && item.links.map((itemLink, idx) =>
                                <li key={idx}><a href={itemLink.url} rel="noopener noreferrer">{itemLink.title}</a></li>
                              )}
                            </ul>
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
      </React.Fragment >
    );
  }
}
