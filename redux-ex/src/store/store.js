import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';

//로컬 스토리지에 저장하는 방식
//redux-persist를 설치해서 사용

//로컬 스토리지 세팅
const persistConfig = {
  key: 'root',
  storage,
};

//만든 슬라이스, 리듀서를 등록
const persistedReducer = persistReducer(persistConfig, counterReducer);

//빈 저장소 만들기
export const store = configureStore({
  reducer: {
    counter : persistedReducer
  }
});

export const persistor = persistStore(store);