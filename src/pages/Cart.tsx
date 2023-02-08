import React from 'react';
import CartComponent from '../components/CartComponent';
import OrderComponent from '../components/OrderComponent';

const Cart = () => {
  return (
    <>
      {false && <CartComponent />}
      {true && <OrderComponent />}
    </>
  );
};

export default Cart;
