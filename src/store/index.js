import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import employeeReducer from './employeeSlice';
import employeesBirthdayReducer from './employeesBirthdaySlice';

const reducers = combineReducers({
  employeesBirthday: employeesBirthdayReducer,
  employees: employeeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['employees'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
