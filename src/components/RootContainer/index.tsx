import { ReactNode, FC, useEffect } from 'react';
import { useHref, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { subDirectorySlice } from '../../redux/slices/subDirectorySlice';
import Footer from '../Footer';
import Header from '../Header';
import RouteComponent from '../RouteComponent';
import Subdirectory from '../Subdirectory';

interface PropContainer {
  pathname: string;
  children?: ReactNode;
}

const RootContainer: FC<PropContainer> = ({ children, pathname }) => {
  const { isOpen } = useAppSelector((state) => state.SubDirectorySlice);
  const { toclose } = subDirectorySlice.actions;
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toclose());
  }, [location]);

  return (
    <>
      <Header />
      <RouteComponent pathname={pathname} />
      {isOpen && <Subdirectory />}
      {children}
      <Footer />
    </>
  );
};

export default RootContainer;
