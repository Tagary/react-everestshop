import React, { FC } from 'react';
import { catalogAPI } from '../../../redux/services/CatalogService';
interface PropName {
  name: string;
}

const ImgComponent: FC<PropName> = ({ name }) => {
  const { data: categories, isLoading } = catalogAPI.useFetchCatalogQuery(name);

  return (
    <div className="p-8 flex flex-wrap item">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <img
          style={{ width: '300px', height: '200px' }}
          src={categories!.products[0].thumbnail}
          alt={categories!.products[0].category}
        />
      )}
    </div>
  );
};

export default ImgComponent;
