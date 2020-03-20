import React from 'react';
import AppCard from './AppCard.jsx';

class AppCards extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <AppCard />
        </div>
      </div>
    );
  }
}

export default AppCards;