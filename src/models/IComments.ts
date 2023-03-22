import IComment from './IComment';

export default interface IComments {
  comments: IComment[];
  total: number;
  skip: number;
  limit: number;
}
