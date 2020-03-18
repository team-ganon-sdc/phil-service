import React from 'react';
import AppCards from './AppCards.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wholeComponent">
        <Header />
        <AppCards />
      </div>
    );
  }
}

export default App;