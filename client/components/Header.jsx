import React from 'react';

const Header = function() {
  return (
    <div className="header row no-gutters">
      <div className="similar col"><h2>Similar</h2></div>
      <div className="seeMore col"><button className='btn btn-success'>See more</button></div>
    </div>
  );
};

export default Header;