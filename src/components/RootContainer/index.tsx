import React, { ReactNode, FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import RouteComponent from '../RouteComponent';
import Subdirectory from '../Subdirectory';

interface PropContainer {
  children?: ReactNode;
}

const RootContainer: FC<PropContainer> = ({ children }) => {
  return (
    <>
      <Header />
      <RouteComponent />
      {false && <Subdirectory />}
      {children}
      <Footer />
    </>
  );
};

export default RootContainer;
