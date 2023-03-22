import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../../models/ICart';

interface cartState {
  products: ICart[];
  totalPrice: number;
}

const initialState: cartState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    total: (state) => {
      state.totalPrice = state.products
        .map((item) => item.price)
        .reduce((accum, curVal) => accum + curVal, 0);
    },
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.products = [...state.products, action.payload];
    },
  },
});
