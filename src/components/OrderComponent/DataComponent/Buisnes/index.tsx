import React from 'react';

import styles from './Buisnes.module.scss';
import classNames from 'classnames';

const Buisnes = () => {
  return (
    <>
      <form className={styles.form}>
        <input className={styles.form__input} type="text" placeholder="ФИО" />
        <input className={styles.form__input} type="tel" placeholder="Телефон" />
        <input className={styles.form__input} type="email" placeholder="Электронная почта" />
      </form>
      <div className={styles.information}>Юридические данные</div>
      <form className={styles.formbuisnes}>
        <select className={styles.formbuisnes__select} name="" id="">
          <option value="IP">ИП</option>
        </select>
        <input
          className={classNames(styles.formbuisnes__input, styles.formbuisnes__factical)}
          type="text"
          placeholder="Фактический адрес"
        />
        <input className={styles.formbuisnes__input} type="number" placeholder="ИНН" />
        <input className={styles.formbuisnes__input} type="text" placeholder="Наименование банка" />
        <input className={styles.formbuisnes__input} type="number" placeholder="Расчетный счет" />
        <input className={styles.formbuisnes__input} type="number" placeholder="Корр. счет" />
        <input className={styles.formbuisnes__input} type="text" placeholder="БИК" />
      </form>
    </>
  );
};

export default Buisnes;
