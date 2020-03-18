import React from 'react';
import AppCard from './AppCard.jsx';

class AppCards extends React.Component {
  render() {
    return (
      <div>
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    );
  }
}

export default AppCards;