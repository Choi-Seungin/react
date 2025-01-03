import { useReducer } from "react";

function reducer(state, action){
  switch (action.type) {
    case 'INCREMENT':
      state = { value: state.value + 1 };
      break;
    case 'DECREMENT':
      state = { value: state.value - 1 };
      break;
    }
    localStorage.setItem('count', JSON.stringify(state));
    return state;
}
export default () => {
  const data = localStorage.getItem('count') != null ? JSON.parse(localStorage.getItem('count')) : {value : 0};
  console.log(data);
  const [count, dispatch] = useReducer(reducer, data);
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <p>count : {count.value}</p>
    </>
  );
}