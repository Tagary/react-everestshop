import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { cartSlice } from '../../redux/slices/cartSlice';
import styles from './CartComponent.module.scss';

const CartComponent = () => {
  const { products, totalPrice } = useAppSelector((state) => state.CartSlice);
  const { clearCart, PlusCart, minusCart, minusProduct } = cartSlice.actions;
  const dispatch = useAppDispatch();

  console.log(products, totalPrice);
  let counter = products.reduce((sum, product) => product.count + sum, 0);
  const onClickPlus = (id: number) => {
    dispatch(PlusCart({ id }));
  };
  const onClickMinus = (id: number) => {
    dispatch(minusCart({ id }));
  };
  const onClickGarbage = (id: number) => {
    dispatch(minusProduct(id));
  };

  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div className={styles.cart}>
        <div className={styles.cart__head}>
          <div className={styles.cart__head_article}>Корзина</div>
          <div className={styles.cart__trashes}>
            <div>
              <img src="assets/images/cart/trash.svg" alt="" />
            </div>
            <div className={styles.cart__deleteall} onClick={() => dispatch(clearCart())}>
              Удалить все
            </div>
          </div>
        </div>
        <div className={styles.cart__main}>
          {products.map((product) => (
            <div key={product.id} className={styles.cart__item}>
              <div className={styles.cart__information}>
                <div>
                  <img className={styles.cart__imgcart} src={product.thumbnail} alt="" />
                </div>
                <div>
                  <div>{product.title}</div>
                  <div className={styles.cart__articule}>
                    Артикул: <span className={styles.cart__articule_num}>{product.id}</span>
                  </div>
                </div>
              </div>
              <div className={styles.cart__count}>
                <div className={styles.cart__minusbg} onClick={() => onClickMinus(product.id)}>
                  <div
                    className={classNames(styles.cart__minus, {
                      [styles.cart__minus_active]: product.count > 1,
                    })}></div>
                </div>
                <div>{product.count}</div>
                <div onClick={() => onClickPlus(product.id)} className={styles.cart__plusbg}>
                  <div className={styles.cart__plus}>
                    <div className={styles.cart__plus_vertical}></div>
                    <div className={styles.cart__plus_horizontal}></div>
                  </div>
                </div>
              </div>
              <div className={styles.cart__prices}>
                <div className={styles.cart__price}>
                  <div className={styles.cart__price_old}>1 059 ₽/шт</div>
                  <div className={styles.cart__price_new}>
                    {product.price} <span className={styles.cart__price_val}>₽/шт</span>
                  </div>
                </div>
              </div>
              <div className={styles.cart__trash} onClick={() => onClickGarbage(product.id)}>
                <img src="assets/images/cart/trash.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cart__result}>
          <div className={styles.cart__resprice}>
            {/* Сделать изменение товара 1 товар на 10>товаров  0?*/}
            <div className={styles.cart__countprod}>
              {counter}&nbsp;
              {counter == 1 ? 'товар' : counter >= 4 ? 'товаров' : 'товара'}
              &nbsp; на сумму
            </div>
            <div className={styles.cart__coutcart}>
              {/* Reduce резултата всех итемов сверху */}
              {totalPrice}
              <span className={styles.cart__coutcart_val}>₽</span>
            </div>
          </div>
          <Link to={'order'}>
            <div className={styles.cart__button}>Оформить заказ</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
