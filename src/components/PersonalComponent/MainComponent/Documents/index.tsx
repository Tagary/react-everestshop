import styles from './Documents.module.scss';

const Documents = () => {
  return (
    <div className={styles.documents}>
      <div className={styles.documents__article}>Уставные документы</div>
      <div className={styles.documents__items}>
        <div className={styles.documents__item}>
          <div className={styles.documents__item_img}>
            <img src="assets/images/documents/document.svg" alt="" />
          </div>
          <div className={styles.documents__item_name}>ИНН ООО "ЭПК"</div>
          <div className={styles.documents__item_size}>JPG, 212 КБ</div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
