import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SubDirectoryState {
  isOpen: boolean;
}

const initialState: SubDirectoryState = {
  isOpen: false,
};

export const subDirectorySlice = createSlice({
  name: 'subdirectory',
  initialState,
  reducers: {
    isopen: (state) => {
      state.isOpen = !state.isOpen;
    },
    toclose: (state) => {
      state.isOpen = false;
    },
  },
});

export default subDirectorySlice.reducer;
