import React from 'react';
import styles from './ListProduct.module.scss';
import classNames from 'classnames';

const ListProductComponent = () => {
  const index1 = 'dsadsa';
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div>Алкидные эмали</div>
      <div className={styles.list}>
        <div className={styles.list__filter}>
          <div>Всего товаров: length</div>
          {
            <div className={styles.options}>
              <div
                className={classNames(styles.options__filter, {
                  [styles.options__filter_focus]: true,
                  [styles.options__filter_unfocus]: false,
                })}>
                Категория
              </div>
              {true && (
                <div className={styles.options__box}>
                  <div className={styles.options__item}>
                    <input
                      className={styles.options__item_checkbox}
                      type="checkbox"
                      name={index1}
                    />
                    <label>ПФ-115</label>
                  </div>
                  <div className={styles.options__item}>
                    <input
                      className={styles.options__item_checkbox}
                      type="checkbox"
                      name={index1}
                    />
                    <label className={styles.options__item_label}>ПФ-266</label>
                  </div>
                </div>
              )}
              <div className={styles.options}>
                <div
                  className={classNames(styles.options__filter, {
                    [styles.options__filter_focus]: true,
                    [styles.options__filter_unfocus]: false,
                  })}>
                  Цена, ₽
                </div>
                <div className={styles.options__box}>
                  <div className={styles.options__range}>
                    <input type="range" />
                  </div>
                  <div className={styles.options__prices}>
                    <div className={styles.options__price}>
                      <input
                        className={styles.options__price_min}
                        placeholder={'2590'}
                        type="tel"
                      />
                    </div>
                    <div className={styles.options__dashed}> - </div>
                    <div className={styles.options__price}>
                      <input
                        className={styles.options__price_max}
                        placeholder={'25819'}
                        type="tel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="w-full pl-6 ">
          <div className={styles.sorts}>
            <div>Сортировать по: </div>
            <div>Показывать по: </div>
            <div className={styles.sorts__figure}>
              <svg
                className={classNames(styles.sorts__figure, {
                  [styles.sorts__figure_active]: true,
                })}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="4" height="4" rx="1" />
                <rect x="4" y="10" width="4" height="4" rx="1" />
                <rect x="4" y="16" width="4" height="4" rx="1" />
                <rect x="10" y="4" width="4" height="4" rx="1" />
                <rect x="10" y="10" width="4" height="4" rx="1" />
                <rect x="10" y="16" width="4" height="4" rx="1" />
                <rect x="16" y="4" width="4" height="4" rx="1" />
                <rect x="16" y="10" width="4" height="4" rx="1" />
                <rect x="16" y="16" width="4" height="4" rx="1" />
              </svg>
              <svg
                className={classNames(styles.sorts__figure, {
                  [styles.sorts__figure_active]: false,
                })}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="5" width="11" height="3" rx="1" />
                <rect x="9" y="11" width="11" height="3" rx="1" />
                <rect x="9" y="17" width="11" height="3" rx="1" />
                <rect x="4" y="5" width="3" height="3" rx="1" />
                <rect x="4" y="11" width="3" height="3" rx="1" />
                <rect x="4" y="17" width="3" height="3" rx="1" />
              </svg>
              <svg
                className={classNames(styles.sorts__figure, {
                  [styles.sorts__figure_active]: false,
                })}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="3" rx="1.5" />
                <rect x="4" y="11" width="16" height="3" rx="1.5" />
                <rect x="4" y="17" width="16" height="3" rx="1.5" />
              </svg>
            </div>
          </div>

          {true && (
            <div className={styles.params}>
              <div className={styles.params__item}>
                <img
                  className={styles.params__item_img}
                  src="assets/images/listcategory/cross.svg"
                  alt=""
                />
                ПФ-266
              </div>
              <div className={styles.params__item}>
                <img
                  className={styles.params__item_img}
                  src="assets/images/listcategory/cross.svg"
                  alt=""
                />
                Parade
              </div>
              <div className={styles.params__clear}>
                <img
                  className={styles.params__clear_img}
                  src="assets/images/listcategory/crestclear.svg"
                  alt=""
                />
                Очистить все
              </div>
            </div>
          )}
          <div
            className={classNames({
              [styles.table]: false,
              [styles.tablelist]: false,
              [styles.tablecard]: true,
            })}>
            <div
              className={classNames({
                [styles.cardtable]: false,
                [styles.cardlist]: false,
                [styles.card]: true,
              })}>
              <div
                className={classNames(styles.cardtable__invisible, {
                  [styles.cardtable__icons]: false,
                })}>
                <div>
                  <svg
                    className={classNames({
                      [styles.cardtable__icons_comparsion]: false,
                    })}
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect y="10" width="3" height="12" rx="1.5" />
                    <rect x="15" y="6" width="3" height="16" rx="1.5" />
                    <rect x="5" width="3" height="22" rx="1.5" />
                    <rect x="10" y="14" width="3" height="8" rx="1.5" />
                  </svg>
                </div>
                <div>
                  <svg
                    className={classNames({
                      [styles.cardtable__icons_favorite]: false,
                    })}
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.43513C20.9719 6.8678 20.5224 8.13647 19.5392 9.15912C16.8283 11.9811 14.1034 14.7885 11.3785 17.6008C10.8588 18.1363 10.1471 18.1314 9.6274 17.596C6.93057 14.803 4.215 12.0293 1.54158 9.21218C0.0807906 7.66856 -0.359318 5.79691 0.296163 3.74196C0.961008 1.66772 2.40775 0.447288 4.49124 0.0806774C6.9493 -0.348643 9.38862 1.19498 10.222 3.65513C10.2267 3.66478 10.2267 3.66961 10.2267 3.67925C10.2735 3.82397 10.3157 3.97833 10.5123 3.97351C10.6949 3.96868 10.737 3.82397 10.7792 3.68408C10.9899 3.03768 11.2942 2.43953 11.7343 1.93303C13.1764 0.27363 14.9789 -0.363115 17.0718 0.201273C19.1834 0.770485 20.4522 2.24658 20.9064 4.45107C20.9719 4.77426 21 5.10228 21 5.43513Z" />
                  </svg>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.cardtable__img]: false,
                  [styles.cardlist__img]: false,
                  [styles.card__img]: true,
                  [styles.cardtable__invisible]: true,
                })}>
                <img
                  className={classNames({
                    [styles.cardtable__img_style]: false,
                    [styles.cardlist__img_style]: false,
                    [styles.card__img_style]: true,
                  })}
                  src="assets/images/listcategory/firstimg.png"
                  alt=""
                />
              </div>
              <div className={styles.cardlist__container}>
                <div>Dulux MASTER 30 BC 2,3 л. краска алк. полуматовая б/цв</div>
                <div
                  className={classNames(styles.cardtable__invisible, {
                    [styles.cardtable__icons]: false,
                    [styles.cardlist__icons]: true,
                  })}>
                  <div>
                    <svg
                      className={classNames(styles.icons, {
                        [styles.cardtable__icons_comparsion]: false,
                      })}
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect y="10" width="3" height="12" rx="1.5" />
                      <rect x="15" y="6" width="3" height="16" rx="1.5" />
                      <rect x="5" width="3" height="22" rx="1.5" />
                      <rect x="10" y="14" width="3" height="8" rx="1.5" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className={classNames(styles.icons, {
                        [styles.cardtable__icons_favorite]: false,
                        [styles.cardlist__icons_favorite]: true,
                      })}
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5.43513C20.9719 6.8678 20.5224 8.13647 19.5392 9.15912C16.8283 11.9811 14.1034 14.7885 11.3785 17.6008C10.8588 18.1363 10.1471 18.1314 9.6274 17.596C6.93057 14.803 4.215 12.0293 1.54158 9.21218C0.0807906 7.66856 -0.359318 5.79691 0.296163 3.74196C0.961008 1.66772 2.40775 0.447288 4.49124 0.0806774C6.9493 -0.348643 9.38862 1.19498 10.222 3.65513C10.2267 3.66478 10.2267 3.66961 10.2267 3.67925C10.2735 3.82397 10.3157 3.97833 10.5123 3.97351C10.6949 3.96868 10.737 3.82397 10.7792 3.68408C10.9899 3.03768 11.2942 2.43953 11.7343 1.93303C13.1764 0.27363 14.9789 -0.363115 17.0718 0.201273C19.1834 0.770485 20.4522 2.24658 20.9064 4.45107C20.9719 4.77426 21 5.10228 21 5.43513Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.cardtable__cart]: false,
                  [styles.cardlist__cart]: true,
                  [styles.card__cart]: false,
                })}>
                <div
                  className={classNames({
                    [styles.cardtable__price]: false,
                    [styles.cardlist__price]: true,
                    [styles.card__price]: false,
                  })}>
                  <div
                    className={classNames({
                      [styles.cardtable__price_old]: false,
                      [styles.cardlist__price_old]: true,
                      [styles.card__price_old]: false,
                    })}>
                    3 512&nbsp;<span>₽/шт</span>
                  </div>
                  <div
                    className={classNames({
                      [styles.cardtable__price_new]: false,
                      [styles.cardlist__price_new]: true,
                      [styles.card__price_new]: false,
                    })}>
                    3 088&nbsp;
                    <span
                      className={classNames({
                        [styles.cardtable__price_val]: false,
                        [styles.cardlist__price_val]: true,
                        [styles.card__price_val]: false,
                      })}>
                      ₽/шт
                    </span>
                  </div>
                </div>
                {false ? (
                  <div>
                    <img src="assets/images/listcategory/cart.svg" alt="" />
                  </div>
                ) : (
                  <div className={styles.cart__item}>В Корзину</div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.pagination}>
            <div
              className={classNames(styles.pagination__item, {
                [styles.pagination__item_active]: true,
              })}>
              1
            </div>
            <div
              className={classNames(styles.pagination__item, {
                [styles.pagination__item_active]: false,
              })}>
              2
            </div>
            <div className={styles.pagination__more}>
              <img src="assets/images/listcategory/more.svg" alt="" />
            </div>
            <div
              className={classNames(styles.pagination__item, {
                [styles.pagination__item_active]: false,
              })}>
              12
            </div>
          </div>
        </div>
      </div>
      <div className={styles.describe}>
        <div className={styles.describe__left}>купить Алкидные эмали в Казани</div>
        <div className={styles.describe__right}>
          <div className={styles.describe__block}>
            <div>
              Алкидная эмаль — универсальный и многоцелевой вид лакокрасочных материалов.
              Особенности краски позволяют применять ее при проведении внутренних и наружных работ
              по ремонту и отделке. Алкидные эмали не боятся минеральных масел и агрессивных моющих
              средств, устойчивы к истиранию, негативным воздействиям окружающей среды, выгоранию
              под солнечными лучами, механическим повреждениям.
            </div>
            <div>
              Этот вид краски создается на основе алкидного лака и различного рода растворителей с
              наполнителями. Также в состав включены красящие пигменты, функциональные добавки
              (защита от грибков, плесени, коррозии, антисептики, огне- и термо-упорные частицы и
              т.д.). Основным растворителем выступает уайт-спирит. Эмаль алкидная в Казани
              выпускается с матовым, полуматовым и глянцевым финишем.
            </div>
          </div>
          <div className={styles.describe__article}>
            Предназначение и область применения алкидных эмалей
          </div>
          <div className={styles.describe__block}>
            <div>
              Наиболее популярная эмаль ПФ 115. В Казани ее покупают для окраски деревянных,
              металлических и иных поверхностей. В продаже 24 колора с насыщенным цветом и приятным
              блеском. Для обработки и покраски дощатых полов и поверхностей лучше купить ПФ 266.
              Эта эмаль создает твердое и износостойкое покрытие с деликатным блеском, устойчивое к
              механическим воздействиям.
            </div>
            <div>
              Если необходимо надежно защитить металлические поверхности от коррозии, разрушения,
              ржавчины и разъедания, то стоит купить пф 115. Цена на нее в Казани доступна, в
              наличии достойный выбор цветового решения и фирмы производителя. Эта эмаль идеальна
              для выполнения работ вне помещения, т.к. обладает повышенной атмосферостойкостью,
              рассчитана температурное окно от -50 до +60 градусов, устойчива к негативным погодным
              явлениям.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductComponent;
