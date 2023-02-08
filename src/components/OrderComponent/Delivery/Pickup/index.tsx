import React from 'react';
import styles from './Pickup.module.scss';

const Pickup = () => {
  return (
    <div className={styles.pickup}>
      <div className={styles.pickup__information}>
        <div className={styles.pickup__form}>
          <div className={styles.pickup__title}>Выберите пункт самовывоза</div>
          <div className={styles.pickup__input}>
            <input type="radio" />
            <label className={styles.pickup__input_label}>
              ул. 22 Декабря, 90а, Омск, Омская обл., 644015
            </label>
          </div>
          <div className={styles.pickup__input}>
            <input type="radio" />
            <label className={styles.pickup__input_label}>
              ул. 22 Декабря, 90а, Омск, Омская обл., 644015
            </label>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23098.905295488166!2d73.2749004379043!3d54.94325248599555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab03c335c6c383%3A0x56e8b0b90b3aefd0!2z0J3QntCZ!5e0!3m2!1sru!2sru!4v1675832420610!5m2!1sru!2sru"
            width="600"
            height="450"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className={styles.pickup__text}>
        <textarea
          className={styles.pickup__textarea}
          placeholder="Примечание к заказу"
          name=""
          id=""
          cols={30}
          rows={10}></textarea>
      </div>
    </div>
  );
};

export default Pickup;
