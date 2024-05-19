import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dustReducer from './dust';
import favReducer from './fav';

const rootReducer = combineReducers({
  dust: dustReducer,
  fav: favReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
