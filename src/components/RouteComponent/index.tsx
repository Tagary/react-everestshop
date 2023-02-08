import React from 'react';
import styles from './RoutComponent.module.scss';

const RouteComponent = () => {
  // Прилетать будут данные о том какой роутинг
  return (
    <div className="max-w-[82.5rem] m-auto mt-8">
      <div className={styles.route}>
        <div className={styles.route__list}>
          <span className={styles.route__list_item}>Главная</span>
          <span className={styles.route__list_item}>ЭМАЛИ</span>
        </div>
      </div>
    </div>
  );
};

export default RouteComponent;
