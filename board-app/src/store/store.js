import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import MemberSlice from './MemberSlice';


const persistConfig = {
  key: 'spring-board',
  storage,
};

const persistedReducer = persistReducer(persistConfig, MemberSlice);

export const store = configureStore({
  reducer: {
    member : persistedReducer
  }
});

export const persistor = persistStore(store);