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
    addToCart: (state, action: PayloadAction<ICart>) => {
      const findProduct = state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    PlusCart: (state, action: PayloadAction<{ id: number }>) => {
      const findProduct = state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        findProduct.count++;
      }
      state.totalPrice = state.products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    minusCart: (state, action: PayloadAction<{ id: number }>) => {
      const findProduct = state.products.find((product) => product.id === action.payload.id);
      if (findProduct && findProduct.count !== 1) {
        findProduct.count--;
      }
      state.totalPrice = state.products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    minusProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
      state.totalPrice = state.products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
