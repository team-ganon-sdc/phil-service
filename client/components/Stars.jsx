import React from 'react';
import {TiStarFullOutline} from 'react-icons/ti';
import {TiStarHalfOutline} from 'react-icons/ti';
import {TiStarOutline} from 'react-icons/ti';

const Stars = function(props) {

  const rating = props.rating;
  var stars = [];



  return (
    <span>
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
    </span>
  );
};

export default Stars;