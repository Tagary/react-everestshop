import classNames from 'classnames';
import { useState } from 'react';
import styles from './Wholesalers.module.scss';

interface Company {
  namecompany: string;
  about: string[];
}
interface isOpen {
  [char: string]: boolean;
}

const Wholesalers = () => {
  const array = [
    {
      namecompany: 'Строительные организации',
      about: [
        'Электронные торговые площадки',
        'В продаже продукты, сертифицированные для учебных и лечебных учреждений',
        'Консультации по техническим характеристикам',
      ],
    },
    {
      namecompany: 'Государственные организации',
      about: [
        'Электронные торговые площадки',
        'В продаже продукты, сертифицированные для учебных и лечебных учреждений',
        'Консультации по техническим характеристикам',
      ],
    },
    {
      namecompany: 'Торговые сети',
      about: [
        'Электронные торговые площадки',
        'В продаже продукты, сертифицированные для учебных и лечебных учреждений',
        'Консультации по техническим характеристикам',
      ],
    },
    {
      namecompany: 'Ремонтные бригады',
      about: [
        'Электронные торговые площадки',
        'В продаже продукты, сертифицированные для учебных и лечебных учреждений',
        'Консультации по техническим характеристикам',
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState<isOpen>({});

  const handlerClick = (namecompany: string) => {
    setIsOpen({
      ...isOpen,
      [namecompany]: !isOpen[namecompany],
    });
  };

  return (
    <div className={styles.wholesalers}>
      <div className={styles.wholesalers__information}>
        <div className={styles.wholesalers__text}>
          <div className={styles.wholesalers__article}>Оптовикам</div>
          <div className={styles.wholesalers__info}>
            <div className={styles.wholesalers__lists}>
              <ul className={styles.wholesalers__list}>
                <li>Низкие цены от дистрибьютера</li>
                <li>Бесплатная доставка товара</li>
                <li>Товар в наличии и под заказ</li>
                <li>Индивидуальный подход к каждому заказу</li>
              </ul>
            </div>
            <div>
              <button className={styles.wholesalers__button}>Начать сотрудничество</button>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/images/wholesalers/img.png" alt="" />
        </div>
      </div>
      <div className={styles.wholesalers__cooperation}>
        <div className={styles.wholesalers__left}>
          <div className={styles.wholesalers__left_img}>
            <img src="assets/images/wholesalers/img-main.png" alt="" />
          </div>
        </div>
        <div className={styles.wholesalers__right}>
          <div className={styles.wholesalers__need}>
            <div className={styles.wholesalers__title}>Кому подойдет?</div>

            {array.map((item) => (
              <div className={styles.wholesalers__fine}>
                <div
                  onClick={() => handlerClick(item.namecompany)}
                  className={classNames(styles.wholesalers__cooper, {
                    [styles.wholesalers__cooper_active]: isOpen[item.namecompany],
                  })}>
                  <div>
                    <img
                      src={
                        isOpen[item.namecompany]
                          ? `assets/images/wholesalers/icon2.svg`
                          : 'assets/images/wholesalers/icon.svg'
                      }
                      alt=""
                    />
                  </div>
                  <div className={styles.wholesalers__namecompany}>{item.namecompany}</div>
                </div>
                <div
                  className={classNames(styles.wholesalers__invisible, {
                    [styles.wholesalers__visible]: isOpen[item.namecompany],
                  })}>
                  <ul className={styles.wholesalers__array}>
                    {item.about.map((next) => (
                      <li>{next}</li>
                    ))}
                  </ul>
                  <button className={styles.wholesalers__array_button}>
                    Начать сотрудничество
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.wholesalers__foot}>
        <div>
          <img
            className={styles.wholesalers__foot_img}
            src="assets/images/wholesalers/iconfooter.svg"
            alt=""
          />
        </div>
        <div className={styles.wholesalers__foot_article}>Все еще думаете?</div>
        <div className={styles.wholesalers__foot_text}>
          Отправьте нам заявку и мы сделаем вам лучшее предложение.
        </div>
        <div className={styles.wholesalers__foot_center}>
          <button className={styles.wholesalers__foot_btn}>Начать сотрудничество</button>
        </div>
      </div>
    </div>
  );
};

export default Wholesalers;
