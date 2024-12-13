import { configureStore } from '@reduxjs/toolkit';
import { serviceMiddlewares, serviceReducers } from '@/services';
import authSlice from './slices/authSlice';
import languageSlice from './slices/languageSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    language: languageSlice,
    cart: cartSlice,
    ...serviceReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(serviceMiddlewares),
});

export default store;
