import React from 'react';
import AppLogo from './AppLogo.jsx';
import AppInfo from './AppInfo.jsx';
const faker = require('faker');
const $ = require('jquery');


class AppCard extends React.Component {
  constructor() {
    super();
    this.state = {
      apps: null
    };
  }

  componentDidMount() {
    const request = $.get('/api/apps', (data) => console.log(data));
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="appCard">
        <AppLogo />
        <AppInfo />
=======
      <div>
        <img src={faker.image.imageUrl()}/>
        <div>App name goes here</div>
        <div>App company goes here</div>
        <div>App description goes here</div>
        <div>App rating goes here</div>
>>>>>>> 55d4c7684fd5f18092cfe25fa249463757db702c
      </div>
    );
  }
}

export default AppCard;