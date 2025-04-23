import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameSlice';

export const store = configureStore({
  reducer: gameReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat((store) => (next) => (action) => {
      console.log('State before action:', store.getState());
      const result = next(action);
      console.log('State after action:', store.getState());
      return result;
    }),
});

// Make store accessible in browser console for development
if (process.env.NODE_ENV === 'development') {
  window.store = store;
}