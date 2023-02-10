import React from 'react';
import ListOrder from './ListOrder';
import OrderInfo from './OrderInfo';
import styles from './Order.module.scss';

const Order = () => {
  return (
    <div className={styles.order}>
      {false && <ListOrder />}
      {true && <OrderInfo />}
    </div>
  );
};

export default Order;
