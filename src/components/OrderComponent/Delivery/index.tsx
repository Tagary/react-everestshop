import { useState } from 'react';
import classNames from 'classnames';

import Deliver from './Deliver';
import Pickup from './Pickup';

import styles from './Delivery.module.scss';

const DeliveryComponent = () => {
  const [delivery, setDelivery] = useState<boolean>(true);
  const [pickup, setPickup] = useState<boolean>(false);

  const handlerClickDelivery = () => {
    if (pickup) {
      setPickup(!pickup);
    }
    if (delivery) {
      return;
    } else {
      setDelivery(!delivery);
    }
  };

  const handlerClickPickup = () => {
    if (delivery) {
      setDelivery(!delivery);
    }
    if (pickup) {
      return;
    } else {
      setPickup(!pickup);
    }
  };

  return (
    <div className={styles.way}>
      <div className={styles.way__deliver}>
        <div className={styles.way__info}>
          <div className={styles.way__triangle}>
            <div className={styles.way__triangle_text}>2</div>
          </div>
          <div className={styles.way__article}>Способ доставки</div>
        </div>
        <div className={styles.way__delivery}>
          <div
            onClick={handlerClickDelivery}
            className={classNames(styles.way__item, { [styles.way__item_active]: delivery })}>
            <input checked={delivery} type="radio" name="delivery" />
            <label>Доставка</label>
            <div className={styles.way__delivery_style}>
              <div>
                от <span className={styles.way__delivery_color}>500</span> ₽
              </div>
              <div className={styles.way__delivery_more}>Подробнее о доставке</div>
            </div>
          </div>
          <div
            onClick={handlerClickPickup}
            className={classNames(styles.way__item, {
              [styles.way__item_active]: pickup,
            })}>
            <input checked={pickup} type="radio" name="delivery" />
            <label>Самовывоз</label>
            <div className={styles.way__delivery_style}>
              <div className={styles.way__delivery_free}>бесплатно</div>
            </div>
          </div>
        </div>
        <div className={styles.way__area}>{delivery ? <Deliver /> : <Pickup />}</div>
      </div>
    </div>
  );
};

export default DeliveryComponent;
