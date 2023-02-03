import React from 'react';
import styles from './Analogues.module.scss';

const Analogues = () => {
  return (
    <>
      <div className={styles.analogs}>
        <div className={styles.analogs__title}>Аналоги</div>
        <div className={styles.analogs__container}>
          <div className={styles.analogs__card}>
            <div className={styles.analogs__assets}>
              <div className={styles.analogs__comparsion}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.analogs__comparsion_color}
                  fill="#C2CBD3"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="3" height="12" rx="1.5" />
                  <rect x="18" y="7" width="3" height="16" rx="1.5" />
                  <rect x="8" y="1" width="3" height="22" rx="1.5" />
                  <rect x="13" y="15" width="3" height="8" rx="1.5" />
                </svg>
              </div>
              <div className={styles.analogs__favorite}>
                <svg
                  className={styles.analogs__favorite_color}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 8.43513C22.9719 9.8678 22.5224 11.1365 21.5392 12.1591C18.8283 14.9811 16.1034 17.7885 13.3785 20.6008C12.8588 21.1363 12.1471 21.1314 11.6274 20.596C8.93057 17.803 6.215 15.0293 3.54158 12.2122C2.08079 10.6686 1.64068 8.79691 2.29616 6.74196C2.96101 4.66772 4.40775 3.44729 6.49124 3.08068C8.9493 2.65136 11.3886 4.19498 12.222 6.65513C12.2267 6.66478 12.2267 6.66961 12.2267 6.67925C12.2735 6.82397 12.3157 6.97833 12.5123 6.97351C12.6949 6.96868 12.737 6.82397 12.7792 6.68408C12.9899 6.03768 13.2942 5.43953 13.7343 4.93303C15.1764 3.27363 16.9789 2.63689 19.0718 3.20127C21.1834 3.77048 22.4522 5.24658 22.9064 7.45107C22.9719 7.77426 23 8.10228 23 8.43513Z" />
                </svg>
              </div>
            </div>
            <div className={styles.analogs__img}>
              <img className={styles.analogs__img_pos} src="assets/images/analogues/1.png" alt="" />
            </div>
            <div className={styles.analogs__card_title}>
              Dulux MASTER 30 BC 2,3 л. краска алк. полуматовая б/цв
            </div>
            <div className={styles.analogs__cart}>
              <div className={styles.analogs__prices}>
                <div className={styles.analogs__prices_old}>
                  3 512 <span>₽/шт</span>
                </div>
                <div className={styles.analogs__prices_new}>
                  3 088 <span className={styles.analogs__prices_value}>₽/шт</span>
                </div>
              </div>
              <div className={styles.analogs__cart_img}>
                <img src="assets/images/analogues/cart.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.related}>
        <div className={styles.related__title}>Сопутствующие товары</div>
        <div className={styles.related__container}>
          <div className={styles.related__card}>
            <div className={styles.related__assets}>
              <div className={styles.related__comparsion}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.related__comparsion_color}
                  fill="#C2CBD3"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="3" height="12" rx="1.5" />
                  <rect x="18" y="7" width="3" height="16" rx="1.5" />
                  <rect x="8" y="1" width="3" height="22" rx="1.5" />
                  <rect x="13" y="15" width="3" height="8" rx="1.5" />
                </svg>
              </div>
              <div className={styles.related__favorite}>
                <svg
                  className={styles.related__favorite_color}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 8.43513C22.9719 9.8678 22.5224 11.1365 21.5392 12.1591C18.8283 14.9811 16.1034 17.7885 13.3785 20.6008C12.8588 21.1363 12.1471 21.1314 11.6274 20.596C8.93057 17.803 6.215 15.0293 3.54158 12.2122C2.08079 10.6686 1.64068 8.79691 2.29616 6.74196C2.96101 4.66772 4.40775 3.44729 6.49124 3.08068C8.9493 2.65136 11.3886 4.19498 12.222 6.65513C12.2267 6.66478 12.2267 6.66961 12.2267 6.67925C12.2735 6.82397 12.3157 6.97833 12.5123 6.97351C12.6949 6.96868 12.737 6.82397 12.7792 6.68408C12.9899 6.03768 13.2942 5.43953 13.7343 4.93303C15.1764 3.27363 16.9789 2.63689 19.0718 3.20127C21.1834 3.77048 22.4522 5.24658 22.9064 7.45107C22.9719 7.77426 23 8.10228 23 8.43513Z" />
                </svg>
              </div>
            </div>
            <div className={styles.related__img}>
              <img className={styles.related__img_pos} src="assets/images/analogues/1.png" alt="" />
            </div>
            <div className={styles.related__card_title}>
              Dulux MASTER 30 BC 2,3 л. краска алк. полуматовая б/цв
            </div>
            <div className={styles.related__cart}>
              <div className={styles.related__prices}>
                <div className={styles.related__prices_old}>
                  3 512 <span>₽/шт</span>
                </div>
                <div className={styles.related__prices_new}>
                  3 088 <span className={styles.related__prices_value}>₽/шт</span>
                </div>
              </div>
              <div className={styles.related__cart_img}>
                <img src="assets/images/analogues/cart.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analogues;
