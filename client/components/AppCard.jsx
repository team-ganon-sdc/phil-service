import React from 'react';
const faker = require('faker');

class AppCard extends React.Component {
  render() {
    return (
      <div>
        <img src={faker.image.imageUrl()}/>
        <div>App name goes here</div>
        <div>App company goes here</div>
        <div>App description goes here</div>
        <div>App rating goes here</div>
      </div>
    );
  }
}

export default AppCard;