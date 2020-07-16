import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

type CountState = {
  count: number;
};

const countInitialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState: countInitialState,
  reducers: {
    add: (state, { payload }: PayloadAction<{ amount: number }>) => {
      state.count = state.count + payload.amount;
    },
  },
});

export default countSlice.reducer;
export const { add } = countSlice.actions;
export const countSelector = (state: RootState) => state.count.count;

export const asyncCount = (amount: number): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(add({ amount }));
  }, 1000);
};
