import styles from './PriceList.module.scss';

const PriceList = () => {
  return (
    <div className={styles.pricelist}>
      <div className={styles.pricelist__information}>
        <div className={styles.pricelist__text}>
          <div className={styles.pricelist__article}>Прайс-лист</div>
          <div className={styles.pricelist__info}>
            <div>
              Заполните форму и мы отправим вам актуальный прайс-лист на продукцию нашей компании.
            </div>
            <div>
              <button className={styles.pricelist__button}>Заказать прайс-лист</button>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/images/pricelist/img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
