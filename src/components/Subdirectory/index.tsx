import React from 'react';
import styles from './Subdirectory.module.scss';
import classNames from 'classnames';

const Subdirectory = () => {
  return (
    <div className="max-w-[82.5rem] m-auto ">
      <div className="flex justify-between">
        <div className={classNames('pt-8', { [styles.categories]: true })}>
          <div
            className={classNames({
              [styles.categories__item_active]: true,
              [styles.categories__item]: true,
            })}>
            ЭМАЛИ
          </div>
          <div className={classNames({ [styles.categories__item]: true })}>КРАСКИ</div>
          <div className={classNames({ [styles.categories__item]: true })}>
            ПЕНЫ, ГЕРМЕТИКИ, КЛЕЙ
          </div>
          <div className={classNames({ [styles.categories__item]: true })}>
            ЗАЩИТА ДЛЯ ДРЕВЕСИНЫ
          </div>
          <div className={classNames({ [styles.categories__item]: true })}>ИНСТРУМЕНТЫ</div>
          <div className={classNames({ [styles.categories__item]: true })}>
            ОКОННАЯ КОМПЛЕКТАЦИЯ
          </div>
          <div className={classNames({ [styles.categories__item]: true })}>
            ОБЩЕСТРОИТЕЛЬНЫЕ МАТЕРИАЛЫ
          </div>
          <div className={classNames({ [styles.categories__item]: true })}>КРЕПЕЖ</div>
          <div className={classNames({ [styles.categories__item]: true })}>ХОЗТОВАРЫ</div>
          <div className={classNames({ [styles.categories__item]: true })}>РЕЖУЩИЕ ИНСТРУМЕНТЫ</div>
        </div>
        <div
          className={classNames(
            'pt-8 flex flex-wrap flex-col max-h-[170px] max-w-[700px] w-full pl-6',
            {
              [styles.choice]: true,
            },
          )}>
          <div>Аклидные эмали</div>
          <div>Акриловые эмали</div>
          <div>Нитроэмали</div>
          <div>Масляные краски</div>
          <div>Спецэмали</div>
          <div>Молотковые краски</div>
          <div>Грунты и грунт-эмали</div>
          <div>Растворители</div>
        </div>
        <div className="pt-8">
          <div className={styles.popular}>ПОПУЛЯРНОЕ СЕГОДНЯ</div>
          <div className={styles.popular__item}>
            <div className={styles.popular__container}>
              <img className={styles.popular__img} src="assets/images/subdirectory/2.png" alt="" />
            </div>
            <div className={styles.popular__describe}>
              Dulux MASTER 30 BC 2,3 л. краска алк. полуматовая б/цв
            </div>
            <div className={styles.popular__price}>
              <div className={styles.popular__price_old}>
                3 512 <span>₽/шт</span>
              </div>
              <div className={styles.popular__price_new}>
                3 088 <span className={styles.popular__price_val}>₽/шт</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subdirectory;
