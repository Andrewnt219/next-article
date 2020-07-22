import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AnyAction, combineReducers, Reducer } from "redux";
import count from "../features/countSlice";
import auth from "../features/authSlice";

const combinedReducer = combineReducers({ count, auth });

export type RootState = ReturnType<typeof combinedReducer>;
type HydratedReducer = Reducer<RootState, AnyAction>;

const reducer: HydratedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState: RootState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    if (state && state.count.count !== 0)
      nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore: MakeStore = (_) => {
  return configureStore({ reducer });
};

export const wrapper = createWrapper(makeStore);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
