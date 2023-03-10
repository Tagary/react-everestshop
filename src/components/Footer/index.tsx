import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="max-w-[82.5rem] m-auto mt-40 pt-[100px] pb-[60px]">
        <div className="flex justify-between">
          <div className="max-w-[450px]">
            <img src="assets/images/logo.png" alt="" />
          </div>
          <div className={styles.footer__link}>
            <div>
              <ul>
                <li>
                  <Link to="catalog" preventScrollReset={false}>
                    КАТАЛОГ
                  </Link>
                </li>
                <li>
                  <Link to="delivery">ДОСТАВКА</Link>
                </li>
                <li>
                  <Link to="payments">ОПЛАТА</Link>
                </li>
                <li>
                  <Link to="pricelist">ПРАЙС-ЛИСТ</Link>
                </li>
                <li>
                  <Link to="wholesalers">ОПТОВИКАМ</Link>
                </li>
                <li>
                  <Link to="vacancy">ВАКАНСИИ</Link>
                </li>
                <li>
                  <Link to="contacts">КОНТАКТЫ</Link>
                </li>
              </ul>
            </div>
            <div className="max-w-[315px] text-white text-base ">
              ООО «ЭПК» 420054, Республика Татарстан г. Казань, ул. Техническая, д. 10, к. 2
            </div>
          </div>
          <div className="max-w-[450px] h-[400px] flex flex-col justify-between">
            <div>
              <div className="text-white ">
                Подпишитесь на рассылку новостей, акций, спецпредложений
              </div>
              <div className="flex bg-[#2D4057]  rounded max-w-[426px] w-full justify-between items-center">
                <div>
                  <input
                    className="outline-none border-none bg-inherit p-4 text-white"
                    placeholder="Электронная почта"
                    type="text"
                  />
                </div>
                <div className="text-white rounded p-[11px] bg-[#2A79CC] m-2">ПОДПИСАТЬСЯ</div>
              </div>
            </div>
            <div>
              <div className="font-extrabold text-4xl text-white">+7 8552 44-84-09</div>
              <div className="font-extrabold text-4xl text-white">sale@everest-rt.ru</div>
            </div>
          </div>
        </div>
        <div className="mt-[55px] pt-[60px] border-t-[1px] border-[#878C9E]">
          <div className="text-white">
            ПАО Сбербанк, Расч/счет 40702810162000033064, Корр/счет 30101810600000000603, БИК
            049205603, ОГРН 1121674004143
          </div>
          <div className="text-[#878C9E]">
            Указанная стоимость товаров и условия их приобретения действительны по состоянию на
            текущую дату.
          </div>
          <div className="text-[#878C9E] pt-[25px]">
            Продолжая работу с сайтом, вы даете согласие на использование сайтом cookies и обработку
            персональных данных в целях функционирования сайта, проведения ретаргетинга,
            статистических исследований, улучшения сервиса и предоставления релевантной рекламной
            информации на основе ваших предпочтений и интересов.
          </div>
          <div className="flex items-center mt-10 justify-between">
            <div className="flex text-white ">
              <a href="" className="pr-[24px] cursor-pointer">
                ПЕРСОЛАНЬНЫЕ ДАННЫЕ
              </a>
              <a href="" className="pr-[24px] cursor-pointer">
                УСЛОВИЯ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ
              </a>
              <a href="" className="cursor-pointer">
                УСЛОВИЯ ПРОДАЖИ
              </a>
            </div>
            <div className="flex">
              <div className="text-[#878C9E] pr-4">Разработка сайта</div>
              <div>
                <img src="assets/images/footer/sitecreate.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
