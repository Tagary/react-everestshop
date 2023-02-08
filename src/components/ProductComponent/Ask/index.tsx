import React from 'react';
import styles from './Ask.module.scss';

const Ask = () => {
  const date = new Date();
  return (
    <div className={styles.ask}>
      <div className={styles.ask__main}>
        <div className={styles.ask__left}>
          <div className={styles.ask__title}>Вопросы</div>
          <div className={styles.ask__item}>
            <div className={styles.ask__head}>
              <div className={styles.ask__name}>Виктор Петров</div>
              <div className={styles.ask__dot}></div>
              <div className={styles.ask__date}>{date.toLocaleDateString()}</div>
            </div>
            <div className={styles.ask__body}>
              <div className={styles.ask__text}>
                А также действия представителей оппозиции, инициированные исключительно
                синтетически, призваны к ответу. Значимость этих проблем настолько очевидна, что
                синтетическое тестирование однозначно определяет каждого участника как способного
                принимать собственные решения касаемо новых принципов формирования
                материально-технической и кадровой базы. Также как постоянный количественный рост и
                сфера нашей активности не даёт нам иного выбора, кроме определения поэтапного и
                последовательного развития общества.
              </div>
            </div>
            <div className={styles.ask__answer}>
              <div className={styles.ask__img}>
                <img src="assets/images/ask/arrow.svg" alt="" />
              </div>
              <div className={styles.ask__information}>
                <div className={styles.ask__admin}>Администратор</div>
                <div className={styles.ask__text}>
                  Умножение двух векторов (векторное) дает аккорд, дальнейшие выкладки оставим
                  студентам в качестве несложной домашней работы. Прямоугольная матрица вызывает
                  косвенный контрпример. Действительно, функция выпуклая книзу притягивает
                  изоморфный график функции. Доказательство расточительно программирует интеграл
                  Гамильтона, при этом, вместо 13 можно взять любую другую константу.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ask__right}>
          <div className={styles.ask__information}>
            <div className={styles.ask__count}>2 вопроса по товару</div>
            <div className={styles.ask__write}>Задать вопрос</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
