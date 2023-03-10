import React from 'react';
import CatalogComponent from '../components/CatalogComponent';
import NewsBlock from '../components/NewsBlock';
import Slider from '../components/Slider';

const Main = () => {
  return (
    <>
      <Slider />
      <CatalogComponent />
      <NewsBlock />
    </>
  );
};

export default Main;
