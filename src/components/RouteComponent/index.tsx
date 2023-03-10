import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './RoutComponent.module.scss';
interface PropRoute {
  pathname: string;
}

const RouteComponent: FC<PropRoute> = ({ pathname }) => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-8">
      <div className={styles.route}>
        <div className={styles.route__list}>
          <Link to={'/'}>
            <span className={styles.route__list_item}>Главная</span>
          </Link>
          {<Link to={''}></Link>}
        </div>
      </div>
    </div>
  );
};

export default RouteComponent;
