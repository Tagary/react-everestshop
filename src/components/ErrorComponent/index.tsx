import React from 'react';
import styles from './ErrorComponents.module.scss';

const ErrorComponent = () => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div className={styles.error}>
        <div className={styles.error__left}>
          <div>Такой страницы не существует.</div>
          <button className={styles.error__button}>Вернуться на главную</button>
        </div>
        <div className={styles.error__right}>
          <div className={styles.error__slach}>/</div>
          <div className={styles.error__notfound}>404</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
