import styles from './Payments.module.scss';

const Payments = () => {
  return (
    <div className={styles.payments}>
      <div className={styles.payments__title}>Оплата</div>
      <div className={styles.payments__items}>
        <div className={styles.payments__item}>
          <div>
            <img src="assets/images/payments/buisnes.svg" alt="" />
          </div>
          <div className={styles.payments__article}>Для юридических лиц</div>
          <div className={styles.payments__list}>
            <div className={styles.payments__text}>
              <div className={styles.payments__slach}>/</div>
              <div className={styles.payments__list_text}>Оплата наличными</div>
            </div>
            <div className={styles.payments__about}>
              В центральном офисе или при доставке службой ЭПК
            </div>
            <div className={styles.payments__text}>
              <div className={styles.payments__slach}>/</div>
              <div className={styles.payments__list_text}>
                Безналичная оплата по выставленному счету
              </div>
            </div>
          </div>
        </div>
        <div className={styles.payments__item}>
          <div>
            <img src="assets/images/payments/individual.svg" alt="" />
          </div>
          <div className={styles.payments__article}>Для юридических лиц</div>
          <div className={styles.payments__list}>
            <div className={styles.payments__text}>
              <div className={styles.payments__slach}>/</div>
              <div className={styles.payments__list_text}>Оплата наличными</div>
            </div>
            <div className={styles.payments__about}>
              В центральном офисе или при доставке службой ЭПК
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
