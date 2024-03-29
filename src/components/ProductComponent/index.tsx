import { useState, useEffect } from 'react';
import Ask from './Ask';
import Describe from './Descirbe';
import Reviwes from './Reviews';

import styles from './Product.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { catalogAPI } from '../../redux/services/CatalogService';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { cartSlice } from '../../redux/slices/cartSlice';

const ProductComponent = () => {
  const { pathname } = useLocation();
  const { addToCart } = cartSlice.actions;
  const dispatch = useAppDispatch();

  const { data: product, isLoading } = catalogAPI.useFetchOneProductQuery(
    pathname.split('/product/')[1],
  );

  console.log(product);

  const [isOpens, setIsOpens] = useState<boolean[]>([true, false, false]);

  const handlerOnClickOpen = (ind: number) => {
    if (isOpens[ind] === true) {
      return;
    }
    setIsOpens((prev) =>
      prev.map((item, index) => (ind === index && item !== true ? (item = true) : (item = false))),
    );
  };

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className="max-w-[82.5rem] m-auto mt-16">
          <div className={styles.product}>
            <div className={styles.product__article}>{product?.title}</div>
            <div className={styles.product__information}>
              <div className={styles.product__code}>
                Артикул: <span className={styles.product__code_num}>{product?.id}</span>
              </div>
              <div className={styles.product__assets}>
                <div className={styles.product__favorites}>
                  <svg
                    className={styles.product__favorite}
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="#C2CBD3"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.43513C20.9719 6.8678 20.5224 8.13647 19.5392 9.15912C16.8283 11.9811 14.1034 14.7885 11.3785 17.6008C10.8588 18.1363 10.1471 18.1314 9.6274 17.596C6.93057 14.803 4.215 12.0293 1.54158 9.21218C0.0807906 7.66856 -0.359318 5.79691 0.296163 3.74196C0.961008 1.66772 2.40775 0.447288 4.49124 0.0806774C6.9493 -0.348643 9.38862 1.19498 10.222 3.65513C10.2267 3.66478 10.2267 3.66961 10.2267 3.67925C10.2735 3.82397 10.3157 3.97833 10.5123 3.97351C10.6949 3.96868 10.737 3.82397 10.7792 3.68408C10.9899 3.03768 11.2942 2.43953 11.7343 1.93303C13.1764 0.27363 14.9789 -0.363115 17.0718 0.201273C19.1834 0.770485 20.4522 2.24658 20.9064 4.45107C20.9719 4.77426 21 5.10228 21 5.43513Z" />
                  </svg>
                  <span className={styles.product__favtext}>Избранное</span>
                </div>
                <div className={styles.product__comparsions}>
                  <svg
                    className={styles.product__comparsion}
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="#C2CBD3"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect y="10" width="3" height="12" rx="1.5" />
                    <rect x="15" y="6" width="3" height="16" rx="1.5" />
                    <rect x="5" width="3" height="22" rx="1.5" />
                    <rect x="10" y="14" width="3" height="8" rx="1.5" />
                  </svg>
                  <span className={styles.product__compartext}>К сравнению</span>
                </div>
              </div>
            </div>
            <div className={styles.product__about}>
              <div className={styles.product__images}>
                <div className={styles.product__imgs}>
                  {product?.images.map((img) => (
                    <div key={img} className={styles.product__item}>
                      <img style={{ maxWidth: '150px' }} src={img} alt="" />
                    </div>
                  ))}
                </div>
                <div className={styles.product__img}>
                  <img style={{ maxWidth: '400px' }} src={product?.thumbnail} alt="" />
                </div>
              </div>
              <div className={styles.product__feature}>
                <div className={styles.product__feature_main}>Основные характеристики</div>
                <div className={styles.product__features}>
                  <div className={styles.product__specification}>
                    Цвет: <span className={styles.product__specification_black}>Бесцветный</span>
                  </div>
                </div>
                <div className={styles.product__all}>Посмотреть все</div>
              </div>
              <div className={styles.product__cart}>
                <div className={styles.product__price}>
                  <div className={styles.product__price_old}>
                    1 819&nbsp;<span>₽/шт</span>
                  </div>
                  <div className={styles.product__price_new}>
                    {product?.price}&nbsp;<span className={styles.product__price_val}>₽/шт</span>
                  </div>
                </div>
                <div className={styles.product__extends}>
                  <div className={styles.product__more}>
                    <div className={styles.product__more_text}>При заказе от 10 000 ₽</div>
                    <div className={styles.product__more_price}>2 808 ₽/шт</div>
                  </div>
                  <div className={styles.product__percent}>-5%</div>
                </div>
                <div className={styles.product__add} onClick={() => dispatch(addToCart(product!))}>
                  Добавить в корзину
                </div>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div
              className={classNames(styles.links__link, {
                [styles.links__link_active]: isOpens[0],
              })}
              onClick={() => handlerOnClickOpen(0)}>
              Описание
            </div>
            <div
              className={classNames(styles.links__link, {
                [styles.links__link_active]: isOpens[1],
              })}
              onClick={() => handlerOnClickOpen(1)}>
              Отзывы
            </div>
            <div
              className={classNames(styles.links__link, {
                [styles.links__link_active]: isOpens[2],
              })}
              onClick={() => handlerOnClickOpen(2)}>
              Вопрос-ответ
            </div>
          </div>
          {isOpens[0] && <Describe describe={product!.description} brand={product!.brand} />}
          {isOpens[1] && <Reviwes />}
          {isOpens[2] && <Ask />}
        </div>
      )}
    </>
  );
};

export default ProductComponent;
