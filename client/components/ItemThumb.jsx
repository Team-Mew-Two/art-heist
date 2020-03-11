import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemThumb (props){
  return (
    <div id={`thumb-image-${ props.imageNumber }`} className='item-list__thumbnail'>
      <Link to='/items'>
        <img src={ props.primaryImage } alt={ props.title } ></img>
      </Link>
    </div>
  );
}