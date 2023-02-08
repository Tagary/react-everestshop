import React from 'react';
import styles from './Deliver.module.scss';

const Deliver = () => {
  return (
    <>
      <form action="" className={styles.deliver}>
        <div>
          <select name="" id="" className={styles.deliver__select} placeholder="Выберите город">
            <option value="choice" selected>
              Выберите город
            </option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Novokuzneck">Новокузнецк</option>
            <option value="Berdsk">Бердск</option>
          </select>
        </div>
        <div className={styles.deliver__position}>
          <input className={styles.deliver__street} type="text" placeholder="Улица" />
          <input type="text" placeholder="Дом/корпус" />
          <input type="text" placeholder="Квартира" />
        </div>
        <div className={styles.deliver__text}>
          <textarea
            className={styles.deliver__textarea}
            placeholder="Примечание к заказу"
            name=""
            id=""
            cols={30}
            rows={10}></textarea>
        </div>
      </form>
    </>
  );
};

export default Deliver;
