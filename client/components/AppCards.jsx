import React from 'react';
import AppCard from './AppCard.jsx';
const $ = require('jquery');

class AppCards extends React.Component {
  constructor() {
    super();
    this.state = {
      apps: []
    };
  }

  componentDidMount() {
    let endPoint = window.location.href.split('=');
    $.get(`http://localhost:3001/api/apps/${endPoint[1]}`, data => {
      this.setState({apps: data});
    });

  }

  render() {

    const apps = this.state.apps.map(app => {
      return <AppCard app={app} key={app._id}/>;
    });

    return (
      <div className="appCards row no-gutters">
        <div className="col">
          {apps}
        </div>
      </div>
    );
  }
}

export default AppCards;