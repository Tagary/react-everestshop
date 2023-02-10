import styles from './OrderInfo.module.scss';

const OrderInfo = () => {
  return (
    <div className={styles.orderinfo}>
      <div className={styles.orderinfo__article}>
        <div className={styles.orderinfo__article_about}>
          Заказ №<span>number</span>
        </div>
        <div className={styles.orderinfo__article_back}>К списку заказов</div>
      </div>
      <div className={styles.orderinfo__informations}>
        <div className={styles.orderinfo__leftcol}>
          <div className={styles.orderinfo__item}>
            <div className={styles.orderinfo__item_title}>Дата заказа:</div>
            <div className={styles.orderinfo__item_what}>29 апреля 2019</div>
          </div>
        </div>
        <div className={styles.orderinfo__rightcol}>
          <div className={styles.orderinfo__products}>
            <div className={styles.orderinfo__product}>
              <div>Dulux MASTER 30 BC 2,3 л. краска алк. полуматовая б/цв</div>
              <div className={styles.orderinfo__articule}>
                Артикул: <span className={styles.orderinfo__articule_nums}>12591237</span>
              </div>
              <div className={styles.orderinfo__prices}>
                <div className={styles.orderinfo__quantity}>
                  <div>5 шт</div>
                  <div className={styles.orderinfo__quantity_circle}></div>
                  <div>299 ₽</div>
                </div>
                <div className={styles.orderinfo__price}>
                  1495 <span className={styles.orderinfo__price_val}>₽/шт</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderinfo__results}>
            <div>
              <div>Итого:</div>
              <div className={styles.orderinfo__result}>
                5 465 <span className={styles.orderinfo__result_val}> ₽</span>
              </div>
            </div>
            <div>
              <button className={styles.orderinfo__button}>Повторить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
