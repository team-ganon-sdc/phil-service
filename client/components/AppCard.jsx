import React from 'react';

class AppCard extends React.Component {
  render() {
    return (
      <div className="AppCard">
        <div className="AppLogo">
          <img src="" alt=""></img>
        </div>
        <div className="AppInfo">
          <div className="header">
            <h1 className="AppName">Snapchat</h1>
            <p className="Company">Snap, Inc.</p>
          </div>
          <div className="Description">Description goes here</div>
          <div className="Rating">Rating goes here</div>
        </div>
      </div>
    );
  }
}