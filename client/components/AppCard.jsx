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
      <div className="appCard">
        <AppLogo />
        <AppInfo />
      </div>
    );
  }
}

export default AppCard;