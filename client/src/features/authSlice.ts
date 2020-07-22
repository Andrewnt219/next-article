import type {
  authState,
  NewUserData,
  UserLoginData,
} from "./@types/authSlice.types";
import {
  Action,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import type { AxiosError } from "axios";

const initialState: authState = {
  email: null,
  token: null,
  isLoading: false,
  error: null,
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (newUserData: NewUserData, thunkAPI) => {
    try {
      const { data } = await authApi.post<NewUserData>(
        "/register",
        newUserData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: UserLoginData, thunkAPI) => {
    try {
      const { data } = await authApi.post<UserLoginData>("/login", user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addMatcher(
        (action): action is PayloadAction<string> =>
          (action.type as string).endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        (action): action is Action =>
          (action.type as string).endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      ),
});

export default authSlice.reducer;
