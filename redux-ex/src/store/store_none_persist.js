import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice';

//빈 저장소 만들기
export default configureStore({
  reducer: {
    counter : counterReducer
  }
});