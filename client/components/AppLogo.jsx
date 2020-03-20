import React from 'react';
const faker = require('faker');

const AppLogo = function(props) {
  return (
    <div className="col-6 appLogo">
      <img src={props.logoUrl}/>
    </div>

  );
};

export default AppLogo;