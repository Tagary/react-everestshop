import SideBarComopnent from './SideBarComponent';

import styles from './PersonalComponent.module.scss';
import MainComponent from './MainComponent';

const PersonalComponent = () => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      <div className={styles.personal}>
        <div className={styles.personal__title}>Личный Кабинет</div>
        <div className={styles.personal__main}>
          <div>
            <SideBarComopnent />
          </div>
          <div className={styles.personal__info}>
            <MainComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalComponent;
