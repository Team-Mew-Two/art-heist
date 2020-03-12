/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  cartData: state.items.currentCart
});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  // populateCart: (cartArray) => dispatch(actions.populateCart(cartArray)),
});

export class CartContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { cart: props.cartData }
    }

    // componentDidMount() {
    //   fetch('/api/getItems')
    //     .then((res) => res.json())
    //     .then((data) => {
    //   // invoke populate item function to update user cart on initial render
    //       this.setState({ cart: data });
    //     })
    //     .catch((error) => {
    //       new Error('Error in fetching Items', error)
    //     })
    // }

    render() {
      const cartArray = [];
      for (let i = 0; i < this.state.cart.length; i++) {
        cartArray.push(
          <div className='rowC'> 
            <div className='item-list__thumbnail'>
              <img src={ this.state.cart[i].primaryimage } 
                   alt={ this.state.cart[i].title } ></img>
            </div>
            <div className='description'>
              <h3> { this.state.cart[i].title } </h3>
              <h4> Price: ${ this.state.cart[i].price } </h4>
              <button> Remove from cart </button>
            </div>
          </div>
        )
      }

      return (
        <div>
          { cartArray }
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);