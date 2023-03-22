import IProduct from './IProduct';

export default interface IProducts {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
