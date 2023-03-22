import React, { FC } from 'react';
import Analogues from '../Analogues';
import styles from './Describe.module.scss';
interface PropsDescribe {
  describe: string;
  brand: string;
}

const Describe: FC<PropsDescribe> = ({ describe, brand }) => {
  return (
    <>
      <div className={styles.describe}>
        <div className={styles.describe__left}>
          <div className={styles.describe__title}>О Товаре</div>
          <div className={styles.describe__text}>{describe}</div>
          <div className={styles.describe__features}>
            <div className={styles.describe__feature}>характеристики</div>
            <div className={styles.describe__lists}>
              <div className={styles.describe__list}>
                <div className={styles.describe__list_charac}>Торговая марка:</div>
                <div className={styles.describe__list_about}>{brand}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.describe__right}>
          <div className={styles.describe__img}>
            <img src="assets/images/describe/asks.png" alt="" />
          </div>
          <div className={styles.describe__ask}>Есть вопросы по товару?</div>
          <div className={styles.describe__askus}>
            Задайте их нам и мы поможем вам определиться с выбором.
          </div>
          <div className={styles.describe__links}>Связаться с нами</div>
        </div>
      </div>
      <Analogues />
    </>
  );
};

export default Describe;
