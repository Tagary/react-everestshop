import React from 'react';
import styles from './Reviews.module.scss';

const Reviwes = () => {
  const count = 3;
  const date = new Date();
  const countLike = 12;
  const countDislike = 1;
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__main}>
        <div className={styles.reviews__left}>
          <div className={styles.reviews__title}>Отзывы</div>
          <div className={styles.reviews__item}>
            <div className={styles.reviews__head}>
              <div className={styles.reviews__name}>Александр</div>
              <div className={styles.reviews__dot}></div>
              <div className={styles.reviews__date}>{date.toLocaleDateString()}</div>
            </div>
            <div className={styles.reviews__body}>
              <div className={styles.reviews__text}>
                А также действия представителей оппозиции, инициированные исключительно
                синтетически, призваны к ответу. Значимость этих проблем настолько очевидна, что
                синтетическое тестирование однозначно определяет каждого участника как способного
                принимать собственные решения касаемо новых принципов формирования
                материально-технической и кадровой базы. Также как постоянный количественный рост и
                сфера нашей активности не даёт нам иного выбора, кроме определения поэтапного и
                последовательного развития общества.
              </div>
            </div>
            <div className={styles.reviews__foot}>
              <div className={styles.reviews__likes}>
                <div>
                  <svg
                    className={styles.reviews__like}
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 15.5H3.25V5.92105H2.5C2.10218 5.92105 1.72064 6.07632 1.43934 6.35268C1.15804 6.62905 1 7.00389 1 7.39474V14.0263C1 14.4172 1.15804 14.792 1.43934 15.0684C1.72064 15.3447 2.10218 15.5 2.5 15.5ZM14.5 5.92105H9.25L10.0915 3.43937C10.1666 3.21788 10.187 2.98204 10.1512 2.75127C10.1153 2.5205 10.0242 2.3014 9.88523 2.11202C9.7463 1.92263 9.56356 1.76839 9.35206 1.66198C9.14056 1.55558 8.90636 1.50006 8.66875 1.5H8.5L4.75 5.50695V15.5H13L15.934 9.16611L16 8.86842V7.39474C16 7.00389 15.842 6.62905 15.5607 6.35268C15.2794 6.07632 14.8978 5.92105 14.5 5.92105Z" />
                  </svg>
                </div>
                <div className={styles.reviews__likecount}>{countLike}</div>
              </div>
              <div className={styles.reviews__dislikes}>
                <div>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    className={styles.reviews__dislike}
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_873_3043)">
                      <path d="M2.5 2.5H3.25V12.0789H2.5C2.10218 12.0789 1.72064 11.9237 1.43934 11.6473C1.15804 11.3709 1 10.9961 1 10.6053V3.97368C1 3.58284 1.15804 3.208 1.43934 2.93163C1.72064 2.65526 2.10218 2.5 2.5 2.5ZM14.5 12.0789H9.25L10.0915 14.5606C10.1666 14.7821 10.187 15.018 10.1512 15.2487C10.1153 15.4795 10.0242 15.6986 9.88523 15.888C9.7463 16.0774 9.56356 16.2316 9.35206 16.338C9.14056 16.4444 8.90636 16.4999 8.66875 16.5H8.5L4.75 12.4931V2.5H13L15.934 8.83389L16 9.13158V10.6053C16 10.9961 15.842 11.3709 15.5607 11.6473C15.2794 11.9237 14.8978 12.0789 14.5 12.0789Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_873_3043">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.reviews__dislikecount}>{countDislike}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviews__right}>
          <div className={styles.reviews__information}>
            <div className={styles.reviews__count}>{count} отзыва</div>
            <div className={styles.reviews__write}>Написать отзыв</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviwes;
