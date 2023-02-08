import { useState } from 'react';
import classNames from 'classnames';

import styles from './Payments.module.scss';

const Payments = () => {
  const [card, setCard] = useState<boolean>(false);
  const [cash, setCash] = useState<boolean>(true);

  const handlerClickCard = () => {
    if (cash) {
      setCash(!cash);
    }
    if (card) {
      return;
    } else {
      setCard(!card);
    }
  };
  const handlerClickCash = () => {
    if (card) {
      setCard(!card);
    }
    if (cash) {
      return;
    } else {
      setCash(!cash);
    }
  };
  return (
    <div className={styles.payments}>
      <div className={styles.payments__payment}>
        <div className={styles.payments__info}>
          <div className={styles.payments__triangle}>
            <div className={styles.payments__triangle_text}>3</div>
          </div>
          <div className={styles.payments__article}>Способ оплаты</div>
        </div>
        <div className={styles.payments__way}>
          <div
            className={classNames(styles.payments__item, { [styles.payments__item_active]: cash })}
            onClick={handlerClickCash}>
            <input checked={cash} type="radio" name="payment" value="cash" />
            <label>Оплата наличными при получении</label>
          </div>
          <div
            className={classNames(styles.payments__item, { [styles.payments__item_active]: card })}
            onClick={handlerClickCard}>
            <input checked={card} type="radio" name="payment" value="card" />
            <label>Оплата картой</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
