import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { catalogAPI } from '../../../redux/services/CatalogService';

interface PropNames {
  name: string;
}

const CategoriesComponent: FC<PropNames> = ({ name }) => {
  const { data: categories, isLoading } = catalogAPI.useFetchCatalogQuery(name);

  return (
    <div className="p-8 flex flex-wrap item">
      {isLoading ? (
        <div>loading</div>
      ) : (
        categories!.products.map((item: any) => (
          <Link key={item.title} to={`product/${item.id}`} className="item__category">
            {item.title}
          </Link>
        ))
      )}
    </div>
  );
};

export default CategoriesComponent;
