import React from 'react';
import Analogues from '../Analogues';
import styles from './Describe.module.scss';

const Describe = () => {
  return (
    <>
      <div className={styles.describe}>
        <div className={styles.describe__left}>
          <div className={styles.describe__title}>О Товаре</div>
          <div className={styles.describe__text}>
            Dulux Master 30 - Алкидная краска для дерева и металла. Образует долговечное
            атмосферостойкое эластичное покрытие, устойчивое к перепадам влажности и температуры
            внутри и снаружи помещения. Придает поверхности грязе- и водоотталкивающие свойства.
            Обладает высокой адгезией к металлу и выдерживает продолжительное температурное
            воздействие до +90 С, идеально подходит для окрашивания радиаторов отопления и иных
            металлических поверхностей. Образует долговечное атмосферостойкое покрытие. Легко
            наносится, не образуя потеков. Универсальная алкидная краска для наружных и внутренних
            работ, идеальна для окрашивания деревянных и металлических поверхностей. Возможно также
            нанесение на бетонные поверхности при внутренних работах. Рекомендуется для окраски
            окон, дверей, мебели, радиаторов отопления, труб, откосов.
          </div>
          <div className={styles.describe__features}>
            <div className={styles.describe__feature}>характеристики</div>
            <div className={styles.describe__lists}>
              <div className={styles.describe__list}>
                <div className={styles.describe__list_charac}>Торговая марка:</div>
                <div className={styles.describe__list_about}>Dulux</div>
              </div>
              <div className={styles.describe__list}>
                <div className={styles.describe__list_charac}>Торговая марка:</div>
                <div className={styles.describe__list_about}>Dulux</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.describe__right}>
          <div className={styles.describe__img}>
            <img src="assets/images/describe/asks.png" alt="" />
          </div>
          <div className={styles.describe__ask}>Есть вопросы по товару?</div>
          <div className={styles.describe__askus}>
            Задайте их нам и мы поможем вам определиться с выбором.
          </div>
          <div className={styles.describe__links}>Связаться с нами</div>
        </div>
      </div>
      <Analogues />
    </>
  );
};

export default Describe;
