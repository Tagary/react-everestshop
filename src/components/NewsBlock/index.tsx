import React from 'react';
import styles from './NewsBlock.module.scss';
const News = () => {
  const date = '04.05.2022';
  const viewers = 121;
  const news = 'Dulux Diamond Max Protect';
  const hestags = ['АКЗОНОБЕЛ', 'ИНТЕРЬЕРРНЫЕ КРАСКИ'];
  return (
    <div className="max-w-[82.5rem] m-auto mt-40">
      <div className="text-black text-[40px] mb-12 font-extrabold">Новости</div>
      <div className="flex flex-wrap mb-[100px]">
        <div className="max-w-xs mb-8 pr-6">
          <div className="">
            <img src="assets/images/mininews/img10.png" alt="" />
          </div>
          <div className="flex mb-3">
            <div className={styles.viewers}>{date}</div>
            <div className="flex items-center pl-6">
              <div className="pr-2">
                <img src="assets/images/mininews/viewers.svg" alt="" />
              </div>
              <div className={styles.viewers}>{viewers}</div>
            </div>
          </div>
          <div className="text-xl min-h-[144px]">{news}</div>
          <div className="flex">
            {hestags.map((item) => (
              <div className={styles.hestags}>{'# ' + item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-blue text-[65px] text-blue-500">/</div>
        <div className="flex text-lg text-black">
          <div className="pr-4 text-lg font-extrabold">ВСЕ НОВОСТИ</div>
          <div>
            <img src="assets/images/mininews/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
