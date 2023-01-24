import { useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames';

const Slider = () => {
  const [index, setIndex] = useState<number>(2);

  const handleArrowLeft = () => {};

  const handleArrowRight = () => {};

  return (
    <div className="max-w-[86rem] m-auto mt-8">
      <div
        className={classNames(styles.slider, {
          [styles.sliderimg]: index === 1,
          [styles.sliderimg2]: index === 2,
        })}>
        <div className="max-w-[588px] text-5xl text-white font-extrabold m">
          Закажи онлайн — забери в пункте выдачи
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex justify-center items-center">
              <div className="text-blue text-[65px] text-blue-500">/</div>
              <div className="flex text-lg text-black">
                <div className="pr-4 text-lg font-extrabold text-white">УЗНАТЬ ПОДРОБНЕЕ</div>
                <div>
                  <img src="assets/images/slider/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.slider__arrow}>
            <div onClick={handleArrowLeft} className="cursor-pointer">
              <img src="assets/images/slider/left.png" alt="" />
            </div>
            <div onClick={handleArrowRight} className="cursor-pointer">
              <img src="assets/images/slider/right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
