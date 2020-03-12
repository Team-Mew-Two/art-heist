import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../state/actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  selectItem: (title) => dispatch(actions.selectItem(title)),
});

export function ItemThumb (props) {
  return (
    <div id={`thumb-image-${ props.imageNumber }`} className='item-list__thumbnail'>
      <Link to='/items'>
        <img src={ props.primaryImage } alt={ props.title } onClick={() => props.selectItem(props.title) }></img>
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemThumb);
