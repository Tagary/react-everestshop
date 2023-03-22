export default interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
  rating: number;
  stock: number;
  thumbnail: string;
  brand: string;
  category: string;
}
