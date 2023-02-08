import React from 'react';
import styles from './Individual.module.scss';

const Individual = () => {
  return (
    <>
      <form className={styles.form}>
        <input className={styles.form__input} type="text" placeholder="ФИО" />
        <input className={styles.form__input} type="tel" placeholder="Телефон" />
        <input className={styles.form__input} type="email" placeholder="Электронная почта" />
      </form>
    </>
  );
};

export default Individual;
