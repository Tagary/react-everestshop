import classNames from 'classnames';
import styles from './NewsList.module.scss';

const NewsList = () => {
  const views = 121;
  return (
    <div className={styles.newslist}>
      <div className={styles.newslist__title}>Новости</div>
      <div className={styles.newslist__items}>
        <div className={styles.newslist__item}>
          <div>
            <img src="assets/images/newslist/img.png" alt="" />
          </div>
          <div className={styles.newslist__date}>
            <div>04.05.2022</div>
            <div className={styles.newslist__views}>
              <span className={styles.newslist__views_img}>
                <img src="assets/images/newslist/view.svg" alt="" />
              </span>
              {views}
            </div>
          </div>
          <div className={styles.newslist__describe}>
            <div className={styles.newslist__article}>Dulux Diamond Max Protect</div>
            <div className={styles.newslist__hashtags}>
              <span># Акзонобел</span>
              <span># Интерьерные краски</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newslist__paginations}>
        <div className={styles.newslist__first}>
          <div
            className={classNames(styles.newslist__paginaton, {
              [styles.newslist__paginaton_active]: true,
            })}>
            1
          </div>
          <div
            className={classNames(styles.newslist__paginaton, {
              [styles.newslist__paginaton_active]: false,
            })}>
            2
          </div>
          <div
            className={classNames(styles.newslist__paginaton, {
              [styles.newslist__pagination_active]: false,
            })}>
            3
          </div>
          <div
            className={classNames(styles.newslist__paginaton, {
              [styles.newslist__pagination_active]: false,
            })}>
            4
          </div>
          <div
            className={classNames(styles.newslist__paginaton, {
              [styles.newslist__pagination_active]: false,
            })}>
            5
          </div>
        </div>
        <div>
          <img src="assets/images/newslist/more.png" alt="" />
        </div>
        <div className={styles.newslist__last}>12</div>
      </div>
    </div>
  );
};

export default NewsList;
