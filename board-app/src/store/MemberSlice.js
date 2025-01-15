import { createSlice } from '@reduxjs/toolkit';

export const MemberSlice = createSlice({
  name: 'member',
  initialState: {
    value: {}
  },
  reducers: {
    saveInfo: (state, action) => {
      state.value = { ...action.payload };
      console.log("saveInfo", state.value);
    },
    clearInfo: (state) => {
      state.value = {};
      console.log("clearInfo", state.value);
    }
  }
});
//각 케이스에 대한 리듀서 함수들을 생성
export const { saveInfo, clearInfo } = MemberSlice.actions;
export default MemberSlice.reducer;