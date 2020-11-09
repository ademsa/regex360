import React from 'react';

export default function Notification(props) {
  return (
    <React.Fragment>
      <div className="columns is-vcentered is-centered has-text-centered">
        <div className="column is-10">
          <div className={"notification is-" + props.messageLevel + " is-rounded has-shadow has-text-inverted"}>
            <button className="delete" onClick={props.handleCloseNotification}></button>
            {props.message}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
