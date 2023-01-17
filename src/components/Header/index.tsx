import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className="bg-color-header min-h-[171px]">
      <div className="max-w-7xl pt-[32px] pb-[32px] m-auto flex">
        <div className="pr-16 flex items-center">
          <img className="min-w-[192px] w-full" src="assets/images/header/logo.png" alt="" />
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
                  <div>+7 8552 44-84-09</div>
                </div>
              </div>
              <div className="flex">
                <nav className={styles.navbar__top}>
                  <a href="">Доставка</a>
                  <a href="">Оплата</a>
                  <a href="">Прайс-лист</a>
                  <a href="">Оптовикам</a>
                  <a href="">Вакансии</a>
                  <a href="">Новости</a>
                  <a href="">Контакты</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex pt-7">
            <div className="bg-white rounded-[4px] w-[174px] h-[56px] flex justify-center items-center mr-6 ">
              <div className="pr-4">
                <img src="assets/images/header/svgmenu/menu.svg" alt="" />
              </div>
              <div className=" font-extrabold text-lg">КАТАЛОГ</div>
            </div>
            <div className="flex items-center bg-[#D8E1EA] rounded-[4px] mr-8">
              <div className="flex justify-between min-w-[575px] ">
                <input
                  placeholder="Поиск товаров"
                  className="p-4 bg-inherit outline-none min-w-500px"
                />
                <div className="m-2 bg-[#2A79CC] rounded-[4px] flex items-center">
                  <div className="pt-[11px] pb-[11px] pr-[24px] pl-[24px]  font-extrabold text-xs text-white">
                    НАЙТИ
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center interface">
              <div className="imginterface">
                <img src="assets/images/header/svgmenu/user.svg" alt="" />
              </div>
              <div className="imginterface">
                <img src="assets/images/header/svgmenu/compare.svg" alt="" />
              </div>
              <div className="imginterface">
                <img src="assets/images/header/svgmenu/favorite.svg" alt="" />
              </div>
              <div className="imginterface">
                <img src="assets/images/header/svgmenu/cart.svg" alt="" />
              </div>
              <div>{0} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
