import classNames from 'classnames';

import Buisnes from './Buisnes';
import Individual from './Individual';

import styles from './DataComponent.module.scss';
import { useState } from 'react';

const DataComponent = () => {
  const [face, setFace] = useState(true);
  const [buisnes, setBuisnes] = useState(false);

  const handlerClickFace = () => {
    if (buisnes) {
      setBuisnes(!buisnes);
    }
    if (face) {
      return;
    } else {
      setFace(!face);
    }
  };

  const handlerClickBuisnes = () => {
    if (face) {
      setFace(!face);
    }
    if (buisnes) {
      return;
    } else {
      setBuisnes(!buisnes);
    }
  };
  return (
    <div className={styles.faces}>
      <div className={styles.faces__data}>
        <div className={styles.faces__info}>
          <div className={styles.faces__triangle}>
            <div className={styles.faces__triangle_text}>1</div>
          </div>
          <div className={styles.faces__article}>Данные получателя</div>
        </div>
        <div className={styles.faces__choice}>
          <div
            onClick={handlerClickFace}
            className={classNames(styles.faces__face, { [styles.faces__individual]: face })}>
            Частное лицо
          </div>
          <div
            onClick={handlerClickBuisnes}
            className={classNames(styles.faces__face, { [styles.faces__buisnes]: buisnes })}>
            Для бизнеса
          </div>
        </div>
        <div className={styles.faces__form}>{face ? <Individual /> : <Buisnes />}</div>
        <div className={styles.faces__checkbox}>
          <div>
            <input
              className={styles.faces__checkbox_item}
              type="checkbox"
              placeholder="Хочу узнавать новости компании"
            />
            <label>Хочу узнавать новости компании</label>
          </div>
          <div>
            <input className={styles.faces__checkbox_item} type="checkbox" />
            <label>Хочу получать персональные предложения и скидки по эл. почте </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComponent;
