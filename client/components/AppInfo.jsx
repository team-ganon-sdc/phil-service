import React from 'react';

const AppInfo = function(props) {
  return (
    <div className="col-6 right-side">
      <div className="appInfo">
        <p className="appName">{props.app.name}</p>
        <p className="company">{props.app.company}</p>
        <p className="description">{props.app.description}</p>
      </div>
      <div className="rating">{props.app.rating}</div>
    </div>
  );
};

export default AppInfo;