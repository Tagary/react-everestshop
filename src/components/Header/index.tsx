import classNames from 'classnames';
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { subDirectorySlice } from '../../redux/slices/subDirectorySlice';
import styles from './Header.module.scss';

const Header = () => {
  const { isOpen } = useAppSelector((state) => state.SubDirectorySlice);
  const { isopen } = subDirectorySlice.actions;
  const dispatch = useAppDispatch();

  return (
    <header className="bg-color-header min-h-[171px]">
      <div className="max-w-[82.5rem] pt-[32px] pb-[32px] m-auto flex">
        <div className="pr-16 flex items-center">
          <Link to={'/'}>
            <img className="min-w-[192px] w-full" src="assets/images/header/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex flex-wrap">
          <div className="max-w-5xl w-full">
            <div className="flex justify-between min-w-[1024px]">
              <div className="flex">
                <div className="flex items-center pr-5">
                  <div className="pr-2">
                    <img src="assets/images/header/svgmenu/geo.svg" alt="" />
                  </div>
                  <div>Казань</div>
                </div>
                <div className="flex items-center">
                  <div className="pr-2">
                    <img src="assets/images/header/svgmenu/phone.svg" alt="" />
                  </div>
                  <a href="tel:+78552448409">+7 8552 44-84-09</a>
                </div>
              </div>
              <div className="flex">
                <nav className={styles.navbar__top}>
                  <Link to="delivery">Доставка</Link>
                  <Link to="payments">Оплата</Link>
                  <Link to="pricelist">Прайс-лист</Link>
                  <Link to="wholesalers">Оптовикам</Link>
                  <Link to="vacancy">Вакансии</Link>
                  <Link to="news">Новости</Link>
                  <Link to="contacts">Контакты</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex pt-7">
            <div
              className={classNames(styles.catalogitem, { [styles.catalogitem__active]: isOpen })}
              onClick={() => dispatch(isopen())}>
              <div className="pr-4 ">
                <img
                  className={styles.imgfilter}
                  src={
                    isOpen
                      ? 'assets/images/subdirectory/cross.svg'
                      : 'assets/images/header/svgmenu/menu.svg'
                  }
                  alt=""
                />
              </div>
              <div
                className={classNames(styles.catalogtext, {
                  [styles.catalogtext__active]: isOpen,
                })}>
                КАТАЛОГ
              </div>
            </div>
            <div className="flex items-center bg-[#D8E1EA] rounded-[4px] mr-8">
              <div className="flex justify-between min-w-[575px] ">
                <input
                  placeholder="Поиск товаров"
                  className="p-4 bg-inherit outline-none min-w-500px w-full"
                />
                <div className="m-2 bg-[#2A79CC] rounded-[4px] flex items-center">
                  <div className={styles.btn__search}>НАЙТИ</div>
                </div>
              </div>
            </div>
            <div className="flex items-center interface">
              <div className={styles.imginterface}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.986 22C9.8678 22 7.75476 22 5.63652 22C3.51307 22 1.86323 20.2863 2.00896 18.1715C2.09744 16.8432 2.77403 15.8431 3.95025 15.2233C5.40231 14.4628 6.95326 13.9783 8.56667 13.7127C9.26928 13.5981 9.64921 13.0355 9.43582 12.4313C9.35776 12.2073 9.20162 12.051 9.01426 11.9208C7.6871 11.0197 6.91163 9.76956 6.6462 8.19127C6.1882 5.42536 8.17112 2.61257 10.9399 2.09689C14.0158 1.52391 16.9095 3.55016 17.3311 6.64424C17.6278 8.84759 16.8002 10.6134 14.9891 11.9104C14.5571 12.2229 14.3957 12.6084 14.5467 13.0459C14.6872 13.4522 14.9943 13.6398 15.4002 13.7075C17.0032 13.9575 18.5281 14.4523 19.9802 15.1816C21.3386 15.8639 22.1609 17.3641 21.9735 18.7757C21.7549 20.3905 20.688 21.5729 19.1423 21.9167C18.882 21.974 18.6114 21.9948 18.3408 21.9948C16.2173 22 14.0991 22 11.986 22Z"
                    fill="#2A79CC"
                  />
                </svg>
              </div>
              <div className={styles.imginterface}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="3" height="12" rx="1.5" fill="#2A79CC" />
                  <rect x="18" y="7" width="3" height="16" rx="1.5" fill="#2A79CC" />
                  <rect x="8" y="1" width="3" height="22" rx="1.5" fill="#2A79CC" />
                  <rect x="13" y="15" width="3" height="8" rx="1.5" fill="#2A79CC" />
                </svg>
              </div>
              <div className={styles.imginterface}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 8.43513C22.9719 9.8678 22.5224 11.1365 21.5392 12.1591C18.8283 14.9811 16.1034 17.7885 13.3785 20.6008C12.8588 21.1363 12.1471 21.1314 11.6274 20.596C8.93057 17.803 6.215 15.0293 3.54158 12.2122C2.08079 10.6686 1.64068 8.79691 2.29616 6.74196C2.96101 4.66772 4.40775 3.44729 6.49124 3.08068C8.9493 2.65136 11.3886 4.19498 12.222 6.65513C12.2267 6.66478 12.2267 6.66961 12.2267 6.67925C12.2735 6.82397 12.3157 6.97833 12.5123 6.97351C12.6949 6.96868 12.737 6.82397 12.7792 6.68408C12.9899 6.03768 13.2942 5.43953 13.7343 4.93303C15.1764 3.27363 16.9789 2.63689 19.0718 3.20127C21.1834 3.77048 22.4522 5.24658 22.9064 7.45107C22.9719 7.77426 23 8.10228 23 8.43513Z"
                    fill="#2A79CC"
                  />
                </svg>
              </div>
              <Link to={'cart'}>
                <div className={styles.imginterface}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.63955 3.60547C3.01228 3.60547 2.41561 3.61049 1.82404 3.60547C1.48745 3.60044 1.23757 3.44464 1.08967 3.15314C0.946881 2.87672 0.97748 2.6003 1.16107 2.34399C1.31916 2.1128 1.55375 2.00726 1.83424 2.00223C2.6145 2.00223 3.39986 1.99721 4.18012 2.00223C4.6646 2.00726 4.95529 2.23845 5.07258 2.70585C5.28677 3.53008 5.49076 4.35934 5.71005 5.21875C5.80695 5.21875 5.90894 5.21875 6.00584 5.21875C11.1056 5.21875 16.2002 5.21875 21.3 5.21875C22.4168 5.21875 23.2175 6.21888 22.9472 7.28436C22.325 9.75203 21.6978 12.2147 21.0705 14.6823C20.8512 15.5468 20.1576 16.0695 19.2448 16.0695C15.5832 16.0695 11.9215 16.0695 8.25993 16.0695C7.30627 16.0695 6.6331 15.5468 6.40362 14.6321C5.73555 11.9885 5.06238 9.34494 4.39431 6.70136C4.13423 5.68112 3.89454 4.65586 3.63955 3.60547Z"
                      fill="#2A79CC"
                    />
                    <path
                      d="M10.8914 20.1052C10.8863 21.1506 10.0142 21.9999 8.95349 21.9949C7.89784 21.9899 7.02579 21.1304 7.02579 20.0901C7.02579 19.0347 7.90804 18.1753 8.97899 18.1853C10.0397 18.2004 10.8965 19.0598 10.8914 20.1052Z"
                      fill="#2A79CC"
                    />
                    <path
                      d="M18.6481 18.1904C19.7089 18.1954 20.5758 19.0498 20.5758 20.0951C20.5758 21.1506 19.6936 22.01 18.6226 21.9999C17.567 21.9899 16.7051 21.1304 16.7051 20.0851C16.7153 19.0397 17.5925 18.1853 18.6481 18.1904Z"
                      fill="#2A79CC"
                    />
                  </svg>
                </div>
              </Link>
              <div>{0}&nbsp;₽</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
