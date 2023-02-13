import classNames from 'classnames';
import { useState } from 'react';
import styles from './Vacancy.module.scss';

interface String {
  [char: string]: boolean;
}

const Vacancy = () => {
  const [isOpen, setIsOpen] = useState<String>({});
  const array = [
    {
      title: 'офис-менеджер',
      about:
        'Нам нужны амбициозные люди! Если Вы любите решать интересные задачи, значит мы нужны Вам!',
      info: [
        {
          aboutInfo: 'Обязанности',
          response: [
            'Обработка входящих заявок (эл.почта, телефон)',
            'Ведение документооборота с клиентами',
            'Информационная поддержка торговых представителей',
          ],
        },
        {
          aboutInfo: 'Требования',
          response: [
            'Высшее образование',
            'Стрессоустойчивость',
            'Знание Microsoft Office',
            'Знание "1С Управление торговлей" приветствуется',
          ],
        },
        {
          aboutInfo: 'Условия',
          response: [
            'Оклад + премия',
            'График работы 5/2, 8:00-17:00',
            'Официальное трудоустройство',
          ],
        },
      ],
    },
    {
      title: 'менеджер по продажам',
      about:
        'Открыта вакансия на должность менеджера по продажам строительно-отделочых материалов.',
      info: [
        {
          aboutInfo: 'Обязанности',
          response: [
            'Обработка входящих заявок (эл.почта, телефон)',
            'Ведение документооборота с клиентами',
            'Информационная поддержка торговых представителей',
          ],
        },
        {
          aboutInfo: 'Требования',
          response: [
            'Высшее образование',
            'Стрессоустойчивость',
            'Знание Microsoft Office',
            'Знание "1С Управление торговлей" приветствуется',
          ],
        },
        {
          aboutInfo: 'Условия',
          response: [
            'Оклад + премия',
            'График работы 5/2, 8:00-17:00',
            'Официальное трудоустройство',
          ],
        },
      ],
    },
    {
      title: 'торговый представитель',
      about: 'Требуется торговый представитель на личном автомобиле',
      info: [
        {
          aboutInfo: 'Обязанности',
          response: [
            'Обработка входящих заявок (эл.почта, телефон)',
            'Ведение документооборота с клиентами',
            'Информационная поддержка торговых представителей',
          ],
        },
        {
          aboutInfo: 'Требования',
          response: [
            'Высшее образование',
            'Стрессоустойчивость',
            'Знание Microsoft Office',
            'Знание "1С Управление торговлей" приветствуется',
          ],
        },
        {
          aboutInfo: 'Условия',
          response: [
            'Оклад + премия',
            'График работы 5/2, 8:00-17:00',
            'Официальное трудоустройство',
          ],
        },
      ],
    },
  ];

  const handlerClick = (vacancy: string) => {
    setIsOpen({
      ...isOpen,
      [vacancy]: !isOpen[vacancy],
    });
  };

  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy__title}>Вакансии</div>
      {array.map((item) => (
        <div
          className={classNames(styles.vacancy__item, {
            [styles.vacancy__item_active]: isOpen[item.title],
          })}>
          <div className={styles.vacancy__head}>
            <div>
              <div className={styles.vacancy__article}>{item.title}</div>
              <div className={styles.vacancy__describe}>{item.about}</div>
            </div>
            <div className={styles.vacancy__img} onClick={() => handlerClick(item.title)}>
              <img
                src={
                  isOpen[item.title]
                    ? `assets/images/vacancy/icon.svg`
                    : `assets/images/vacancy/icon2.svg`
                }
                alt=""
              />
            </div>
          </div>
          <div
            className={classNames(styles.vacancy__describtions, {
              [styles.vacancy__describtions_active]: isOpen[item.title],
            })}>
            {item.info.map((about) => (
              <div className={styles.vacancy__about}>
                <div className={styles.vacancy__about_text}>{about.aboutInfo}</div>
                <ul className={styles.vacancy__list}>
                  {about.response.map((resp) => (
                    <li>
                      <span className={styles.vacancy__slach}>/</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vacancy;
