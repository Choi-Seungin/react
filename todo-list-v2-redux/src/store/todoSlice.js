import { createSlice } from '@reduxjs/toolkit';

const makeTodo = () => {
  const todo = [];
  for (let i = 1; i <= 5; i++) {
      todo.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todo;
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: makeTodo(), 
    count: 6
  },
  reducers: {
    addTodo : (state, action) => {
      state.todoList = state.todoList.concat({ id: state.count++, text: action.payload, done: false });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
  }
});
//각 케이스에 대한 리듀서 함수들을 생성
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;