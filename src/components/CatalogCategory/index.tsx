import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { catalogAPI } from '../../redux/services/CatalogService';
import styles from './CatalogCategory.module.scss';

const CatalogCategory = () => {
  let { pathname } = useLocation();

  const { data: data, isLoading } = catalogAPI.useFetchCatalogQuery(pathname.split('/catalog/')[1]);
  console.log(data);

  return (
    <div className="max-w-[82.5rem] m-auto">
      <div className="font-extrabold text-5xl mt-16 mb-12">
        {pathname.split('/catalog/')[1].toUpperCase()}
      </div>
      <div className={styles.catalog}>
        {data?.products.map((product) => (
          <div key={product.id} className={styles.catalog__item}>
            <div className={styles.catalog__item_img}>
              <img src={product.thumbnail} alt="" />
            </div>
            <div className={styles.catalog__info}>
              <div className={styles.catalog__info_text}>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </div>
              <div className={styles.catalog__info_arrow}>
                <img src="assets/images/news/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCategory;
