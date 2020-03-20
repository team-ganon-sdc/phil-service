import React from 'react';

class AppInfo extends React.Component {
  render() {
    return (
      <div className="col-6 right-side">
        <div className="appInfo">
          <p className="appName">Snapchat</p>
          <p className="company">Snap, Inc.</p>
          <p className="description">Description goes here</p>
        </div>
        <div className="rating">Rating goes here</div>
      </div>
    );
  }
}

export default AppInfo;