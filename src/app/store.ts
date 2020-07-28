import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { AnyAction, combineReducers, Reducer } from "redux";
import auth from "../features/authSlice";

const combinedReducer = combineReducers({ auth });

export type RootState = ReturnType<typeof combinedReducer>;
type HydratedReducer = Reducer<RootState, AnyAction>;

const reducer: HydratedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState: RootState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

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
