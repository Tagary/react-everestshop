import React from 'react';

const Catalog = () => {
  return (
    <div className="max-w-[86rem] m-auto mt-40">
      <div className="text-black text-[40px] mb-12 font-extrabold">КАТАЛОГ</div>
      <div className="flex flex-wrap">
        <div className="card__item bg-[#E8EFF5] rounded-[4px] max-w-[420px] mr-6 mb-8">
          <div className="p-8">
            <img src="assets/images/catalog/emali.png" alt="" />
          </div>
          <div className="pl-8 font-extrabold">ЭМАЛИ</div>
          <div className="p-8 flex flex-wrap">
            <div className="item__category">Аклидные эмали</div>
            <div className="item__category">Акриловые эмали</div>
            <div className="item__category">Нитро эмали</div>
            <div className="item__category">Масляные краски</div>
            <div className="item__category">Грунт ГФ и ГЭ</div>
            <div className="item__category">Эмали спецназначения</div>
            <div className="item__category">Растворители</div>
            <div className="item__category">Специальные грунты</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
