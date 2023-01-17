import React from 'react';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsBlock from '../components/NewsBlock';

const Main = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <NewsBlock />
      <Footer />
    </div>
  );
};

export default Main;
