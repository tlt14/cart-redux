import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from './../constants/Message'
import * as actions from './../actions/index'


class CartContainer extends Component {
  render() {
    var {cart}= this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    );
  }
  showCartItem=(cart)=> {
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var {onDeleteProductInCart,onChangeMessage,onUpdateCart}=this.props;
    if(cart.length > 0) {
      result=cart.map((item, index)=> {
        return <CartItem 
                  key={index}
                  item={item}
                  index={index}
                  onDeleteProductInCart={onDeleteProductInCart}
                  onChangeMessage={onChangeMessage}
                  onUpdateCart={onUpdateCart}
                />
      })
    }
    return result;
  }
  showTotal=(cart)=> {
    var result=null;
    if(cart.length > 0) {
       return <CartResult cart={cart}/>
    }
    return result;
  }
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
   PropTypes.shape({
      product:PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }),
      quantity: PropTypes.number,
   })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    cart:state.cart
  };
};
const mapDispatchToProps = (dispatch,props) => {
  return {
    onDeleteProductInCart:(id)=>{
      dispatch(actions.deleteProductInCart(id));
    },
    onChangeMessage: (message)=>{
      dispatch(actions.changeMessage(message))
    },
    onUpdateCart:(product,quantity)=>{
      dispatch(actions.updateCart(product,quantity));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
