import React from 'react';
import styles from './CatalogCategory.module.scss';

const CatalogCategory = () => {
  const propNameclick = 'Эмали';

  return (
    <div className="max-w-[86rem] m-auto mt">
      <div className="font-extrabold text-5xl mt-16 mb-12">{propNameclick}</div>
      <div className={styles.catalog}>
        <div className={styles.catalog__item}>
          <div className={styles.catalog__item_img}>
            <img src="assets/images/catalogfull/1.png" alt="" />
          </div>
          <div className={styles.catalog__info}>
            <div className={styles.catalog__info_text}>Алкидные эмали</div>
            <div className={styles.catalog__info_arrow}>
              <img src="assets/images/news/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategory;
