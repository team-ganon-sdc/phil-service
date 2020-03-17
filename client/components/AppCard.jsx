import React from 'react';
const faker = require('faker');

class AppCard extends React.Component {
  render() {
    return (
      <div className="AppCard">
        <div className="AppLogo">
          <img src={faker.image.imageUrl()}/>
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

export default AppCard;