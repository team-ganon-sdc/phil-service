import React from 'react';
import AppCard from './AppCard.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Similar</h2>
        <button>See more</button>
        <AppCard />
      </div>
    );
  }
}

export default App;