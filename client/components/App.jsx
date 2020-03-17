import React from 'react';
import AppCard from './AppCard.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wholeComponent">
        <Header />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    );
  }
}

export default App;