import React from 'react';

export default function ItemThumb (props){
  return (
    <div>
      <img src={ props.primaryImage } alt={ props.title } ></img>
    </div>
  );
}