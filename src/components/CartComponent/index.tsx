import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartComponent.module.scss';

const CartComponent = () => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div className={styles.cart}>
        <div className={styles.cart__head}>
          <div className={styles.cart__head_article}>Корзина</div>
          <div className={styles.cart__trashes}>
            <div>
              <img src="assets/images/cart/trash.svg" alt="" />
            </div>
            <div className={styles.cart__deleteall}>Удалить все</div>
          </div>
        </div>
        <div className={styles.cart__main}>
          <div className={styles.cart__item}>
            <div className={styles.cart__information}>
              <div>
                <img src="assets/images/cart/img.png" alt="" />
              </div>
              <div>
                <div>ДАЛИ эмаль алкидная для радиаторов 0,5 л/6</div>
                <div className={styles.cart__articule}>
                  Артикул: <span className={styles.cart__articule_num}>12591237</span>
                </div>
              </div>
            </div>
            <div className={styles.cart__count}>
              <div className={styles.cart__minusbg}>
                <div className={styles.cart__minus}></div>
              </div>
              <div>1</div>
              <div className={styles.cart__plusbg}>
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
                  392 <span className={styles.cart__price_val}>₽/шт</span>
                </div>
              </div>
            </div>
            <div className={styles.cart__trash}>
              <img src="assets/images/cart/trash.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.cart__result}>
          <div className={styles.cart__resprice}>
            {/* Сделать изменение товара 1 товар на 10>товаров  0?*/}
            <div className={styles.cart__countprod}>4 товара на сумму</div>
            <div className={styles.cart__coutcart}>
              {/* Reduce резултата всех итемов сверху */}
              5 465 <span className={styles.cart__coutcart_val}>₽</span>
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
