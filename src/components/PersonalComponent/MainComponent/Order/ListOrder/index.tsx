import styles from './ListOrder.module.scss';

const ListOrder = () => {
  return (
    <div className={styles.listorder}>
      <div className={styles.listorder__article}>
        Заказы
        <sup className={styles.listorder__article_sup}>
          <small>3</small>
        </sup>
      </div>
      <div className={styles.listorder__table}>
        <div className={styles.listorder__paragraph}>
          <div className={styles.listorder__paragraph_item}>№</div>
          <div className={styles.listorder__paragraph_item}>Дата</div>
          <div className={styles.listorder__paragraph_item}>Покупатель</div>
          <div className={styles.listorder__paragraph_item}>Сумма заказа</div>
        </div>
        <div className={styles.listorder__item}>
          <div className={styles.listorder__item_num}>30</div>
          <div>29 апреля 2019</div>
          <div>Шамсиева Алсу</div>
          <div>3 000 412 ₽</div>
          <div className={styles.listorder__item_arrow}>
            <img src="assets/images/orderList/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
