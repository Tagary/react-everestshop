import styles from './Contacts.module.scss';
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__title}>Контакты</div>
      <div className={styles.contacts__informations}>
        <div className={styles.contacts__informations_many}>Многоканальный телефон</div>
        <div className={styles.contacts__informations_res}>Обратный звонок</div>
      </div>
      <div className={styles.contacts__telephone}>+7 843 233-44-22</div>
      <div className={styles.contacts__items}>
        <div className={styles.contacts__item}>
          <div>
            <div>
              <img src="assets/images/contacts/map.png" alt="" />
            </div>
          </div>
          <div className={styles.contacts__describe}>
            <div className={styles.contacts__describe_article}>Офис и склад в Казани</div>
            <div className={styles.contacts__paragraph}>
              <div className={styles.contacts__paragraph_title}>Телефон:</div>
              <div className={styles.contacts__paragraph_desc}>+7 843 233-44-22</div>
            </div>
            <div className={styles.contacts__adress}>
              <div className={styles.contacts__adress_title}>Адрес:</div>
              <div className={styles.contacts__adress_desc}>г. Казань, ул. Техническая, 10/2</div>
            </div>
            <div className={styles.contacts__time}>
              <span className={styles.contacts__time_img}>
                <img src="assets/images/contacts/time.svg" alt="" />
              </span>
              Пн-пт: 8:00—17:00; Сб: 8:00—11:00
            </div>
            <div className={styles.contacts__map}>
              <span className={styles.contacts__map_img}>
                <img src="assets/images/contacts/geo.svg" alt="" />
              </span>
              Посмотреть на карте
            </div>
          </div>
        </div>
        <div className={styles.contacts__item}>
          <div>
            <div>
              <img src="assets/images/contacts/map2.png" alt="" />
            </div>
          </div>
          <div className={styles.contacts__describe}>
            <div className={styles.contacts__describe_article}>
              Офис и склад в Набережных Челнах
            </div>
            <div className={styles.contacts__paragraph}>
              <div className={styles.contacts__paragraph_title}>Телефон:</div>
              <div className={styles.contacts__paragraph_desc}>+7 8552 44–84–22</div>
            </div>
            <div className={styles.contacts__adress}>
              <div className={styles.contacts__adress_title}>Адрес:</div>
              <div className={styles.contacts__adress_desc}>
                г. Набережные Челны, ул. Магистральная, 51а
              </div>
            </div>
            <div className={styles.contacts__time}>
              <span className={styles.contacts__time_img}>
                <img src="assets/images/contacts/time.svg" alt="" />
              </span>
              Пн-пт: 8:00—17:00; Сб: 8:00—14:00
            </div>
            <div className={styles.contacts__map}>
              <span className={styles.contacts__map_img}>
                <img src="assets/images/contacts/geo.svg" alt="" />
              </span>
              Посмотреть на карте
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contacts__requisites}>
        <div className={styles.contacts__requisite}>
          <div className={styles.contacts__requisite_title}>Реквизиты компании</div>
          <div className={styles.contacts__names}>
            <div className={styles.contacts__names_title}>Наименование:</div>
            <div>ООО «ЭПК»</div>
          </div>
          <div className={styles.contacts__names}>
            <div className={styles.contacts__names_title}>Наименование:</div>
            <div>ООО «ЭПК»</div>
          </div>
        </div>
        <div className={styles.contacts__files}>
          <div>
            <img src="assets/images/contacts/icon.png" alt="" />
          </div>
          <div className={styles.contacts__file}>
            <div className={styles.contacts__file_text}>Карта партнера</div>
            <div className={styles.contacts__file_size}>PDF, 212 КБ</div>
          </div>
        </div>
      </div>
      <div className={styles.contacts__partners}>
        <div className={styles.contacts__partners_article}>Партнеры</div>
        <div className={styles.contacts__logos}>
          <div className={styles.contacts__logo}>
            <img src="assets/images/contacts/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
