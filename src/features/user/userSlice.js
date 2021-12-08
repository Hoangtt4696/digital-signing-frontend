import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REDUX_STATUS } from 'ds-constants';
import api from 'utils/api';
import { setUserToken, removeUserToken } from 'utils/localStorage';

const initialState = {
  user: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  status: REDUX_STATUS.IDLE,
  errorMessage: '',
};

export const loginAsync = createAsyncThunk('users/login', async ({email, password}, thunkAPI) => {
  try {
    const response = await api.post('/login', {email, password});

    await setUserToken(response.data.data.tokens.access);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.errorMessage = '';
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;
      state.status = REDUX_STATUS.IDLE;
    },
    logout: (state) => {
      state.errorMessage = '';
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;
      state.user = null;
      removeUserToken();
    },
  },
  extraReducers: {
    // login
    [loginAsync.fulfilled]: (state, {payload}) => {
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = '';
      state.user = payload.data.user;
      state.status = REDUX_STATUS.SUCCEEDED;
    },
    [loginAsync.rejected]: (state, {payload}) => {
      state.isError = true;
      state.isFetching = false;
      state.errorMessage = payload.message;
      state.status = REDUX_STATUS.FAILED;
    },
    [loginAsync.pending]: (state) => {
      state.isFetching = true;
      state.status = REDUX_STATUS.LOADING;
    },
  },
});

export const {clearState, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
