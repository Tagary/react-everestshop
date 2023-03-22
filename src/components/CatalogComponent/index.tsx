import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { catalogAPI } from '../../redux/services/CatalogService';
import CategoriesComponent from './CategoriesComponent';
import ImgComponent from './ImgComponent';

const CatalogComponent = () => {
  const { data: catalog, isLoading } = catalogAPI.useFetchAllCatalogQuery('');

  return (
    <div className="max-w-[82.5rem] m-auto mt-40">
      <div className="text-black text-[40px] mb-12 font-extrabold">КАТАЛОГ</div>
      <div className="flex flex-wrap gap-6">
        {isLoading ? (
          <div>loading</div>
        ) : (
          catalog!.map((item: string) => (
            <div key={item} className="card__item bg-[#E8EFF5] rounded-[4px] max-w-[420px]">
              <div className="p-8">
                <ImgComponent name={item} />
              </div>
              <Link to={`catalog/${item}`} className="pl-8 font-extrabold uppercase">
                {item}
              </Link>
              <CategoriesComponent name={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CatalogComponent;
