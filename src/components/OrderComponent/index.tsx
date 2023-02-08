import styles from './OrderComponent.module.scss';
import DeliveryComponent from './Delivery';
import DataComponent from './DataComponent';
import Payments from './Payments';

const OrderComponent = () => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div className={styles.order}>
        <div className={styles.order__title}>Оформление заказа</div>
        {true && (
          <div className={styles.order__signin}>
            <div className={styles.order__signin_img}>
              <img src="assets/images/order/user.png" alt="" />
            </div>
            <div>
              {/* Отображать не авторизированных */}
              <a href="">Авторизуйтесь</a>, чтобы отслеживать статус Вашего заказа, просматривать и
              повторять прошлые заказы, а также оперативно узнавать о действующих акциях и
              распродажах.
            </div>
          </div>
        )}
        <DataComponent />
        <DeliveryComponent />
        <Payments />
        <div className={styles.order__finish}>
          <div className={styles.order__result}>
            <div className={styles.order__values}>
              <div>Итого: </div>
              <div className={styles.order__value}>
                5 465 <span className={styles.order__value_size}>₽</span>
              </div>
            </div>
            <div>
              <div className={styles.order__button}>Оформить заказ</div>
            </div>
          </div>
          <div className={styles.order__moreinfo}>
            Нажимая на кнопку, вы подтверждаете свое совершеннолетие, соглашаетесь на обработку
            персональных данных в соответствии с условиями пользовательского соглашения, а также с
            условиями продажи.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
