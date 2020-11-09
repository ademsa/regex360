import React from 'react';
import methodsAndProps from './../core/methodsandprops';

export default function LearnMethodsAndProps() {
  return (
    <React.Fragment>
      <div className="box has-text-left">
        <table className="table is-fullwidth">
          <colgroup>
            <col width="15%"></col>
            <col width="15%"></col>
            <col width="40%"></col>
            <col width="30%"></col>
          </colgroup>
          <thead>
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Group</th>
              <th className="p-3">Description</th>
              <th className="p-3">External References</th>
            </tr>
          </thead>
          <tbody>
            {methodsAndProps && methodsAndProps.map((item, idx) =>
              <tr key={idx}>
                <td>{item.type}</td>
                <td>{item.name}</td>
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
    </React.Fragment >
  );
}
