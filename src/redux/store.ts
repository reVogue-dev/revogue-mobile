// store/store.ts
import {configureStore} from '@reduxjs/toolkit';

// Example slice (you can add more slices as needed)
import exampleSlice from './slices/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleSlice, // Add your reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
