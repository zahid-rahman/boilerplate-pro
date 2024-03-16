import { configureStore } from '@reduxjs/toolkit';
import baseApi from './baseApi';
import authApi from './api/auth';
import { ENV } from '@/@projectName/config/env';
import demoSlice from './slices/demoSlice/demoSlice';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		demoState: demoSlice,
	},
	devTools: ENV.isDevelopment,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
