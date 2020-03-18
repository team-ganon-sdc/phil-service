import React from 'react';

class AppInfo extends React.Component {
  render() {
    return (
      <div className="appInfo">
        <div className="nameAndCo">
          <h1 className="appName">Snapchat</h1>
          <p className="company">Snap, Inc.</p>
        </div>
        <div className="description">Description goes here</div>
        <div className="rating">Rating goes here</div>
      </div>
    );
  }
}

export default AppInfo;