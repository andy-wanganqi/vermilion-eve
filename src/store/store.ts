import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
// import filtersReducer from './slices/filtersSlice.js';
// import expensesReducer from './slices/expensesSlice.js';

const createStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: {
      example: exampleReducer,
      // filters: filtersReducer,
      // expenses: expensesReducer,
    },
    preloadedState,
  });
  return store;  
}

export default createStore;
