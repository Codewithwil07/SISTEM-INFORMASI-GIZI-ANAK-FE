import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import giziReducer from '../features/gizi/gizi.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gizi: giziReducer,
  },
});

export default store;
