import React from 'react';
const faker = require('faker');

const AppLogo = function(props) {
  return (
    <img src={faker.image.imageUrl()}/>
  );
};

export default AppLogo;