import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__items}>
        <div className={styles.profile__title}>Контактная информация</div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>
            ФИО <span className={styles.profile__article_required}>*</span>
          </div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__doubleitem}>
          <div className={styles.profile__itemsmall}>
            <div className={styles.profile__article}>
              Телефон <span className={styles.profile__article_required}>*</span>
            </div>
            <input className={styles.profile__input} type="text" />
          </div>
          <div className={styles.profile__itemsmall}>
            <div className={styles.profile__article}>
              Электронная почта <span className={styles.profile__article_required}>*</span>
            </div>
            <input className={styles.profile__input} type="text" />
          </div>
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>Форма собственности</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>ИНН</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>
            Фактический адрес <span className={styles.profile__article_required}>*</span>
          </div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>БИК</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>Наименование банка</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>Расчетный счет</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>Корр. счет</div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__button}>
          <button>Сохранить</button>
        </div>
      </div>
      <div className={styles.profile__items}>
        <div className={styles.profile__title}>Смена пароля</div>
        <div className={styles.profile__item}>
          <div className={styles.profile__article}>
            Текущий пароль <span className={styles.profile__article_required}>*</span>
          </div>
          <input className={styles.profile__input} type="text" />
        </div>
        <div className={styles.profile__doubleitem}>
          <div className={styles.profile__itemsmall}>
            <div className={styles.profile__article}>
              Новый пароль <span className={styles.profile__article_required}>*</span>
            </div>
            <input className={styles.profile__input} type="text" />
          </div>
          <div className={styles.profile__itemsmall}>
            <div className={styles.profile__article}>
              Потвердить новый пароль <span className={styles.profile__article_required}>*</span>
            </div>
            <input className={styles.profile__input} type="text" />
          </div>
        </div>
        <div className={styles.profile__button}>
          <button>Изменить</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
