import React from 'react';
import CatalogComponent from '../components/CatalogComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsBlock from '../components/NewsBlock';
import RootContainer from '../components/RootContainer';
import Slider from '../components/Slider';
import Subdirectory from '../components/Subdirectory';

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
