import styles from './Delivery.module.scss';

const Delivery = () => {
  return (
    <div>
      <div className={styles.delivery__information}>
        <div className={styles.delivery__text}>
          <div className={styles.delivery__article}>Доставка</div>
          <div className={styles.delivery__info}>
            <div>
              Приобретая товары в ООО "ЭПК", Вы можете воспользоваться услугой доставки товара.
            </div>
            <div className={styles.delivery__next}>
              <div className={styles.delivery__slach}>/</div>
              <div className={styles.delivery__textnext}>Листайте дальше</div>
              <div className={styles.delivery__arrow}>
                <img src="assets/images/delivery/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/images/delivery/img.png" alt="" />
        </div>
      </div>
      <div className={styles.delivery__about}>
        <div className={styles.delivery__left}>
          <div className={styles.delivery__item}>
            <div className={styles.delivery__title}>Стоимость и условия доставки по г. Казань</div>
            <div className={styles.delivery__lists}>
              <ul className={styles.delivery__list}>
                <li>Абсолютно бесплатна при заказе от 10 000 ₽</li>
                <li>Доставка осуществляется на следующий день после согласования заказа.</li>
                <li>
                  Доставка осуществляется максимально близко к месту выгрузки. Разгрузка товара
                  производится силами покупателя.
                </li>
                <li>Ограничение по весу сухих смесей - не более 200 кг.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.delivery__right}>
          <div className={styles.delivery__img}>
            <img src="assets/images/describe/asks.png" alt="" />
          </div>
          <div className={styles.delivery__ask}>Есть вопросы по товару?</div>
          <div className={styles.delivery__askus}>
            Задайте их нам и мы поможем вам определиться с выбором.
          </div>
          <div className={styles.delivery__links}>Связаться с нами</div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
