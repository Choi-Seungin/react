import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useCallback, useRef, useState } from "react";
const makeTodo = () => {
    const todo = [];
    for(let i = 1; i <= 5; i++) {
        todo.push({id: i, text: `${i}번째 할 일`, done: false});
    }
    return todo;
}

export default function TodoTemplate() {
    const [todoList, setTodoList] = useState(makeTodo());
    const deleteTodo = useCallback((id) => {
        //id 값을 가지고 todoList에 있는 값을 제거
        setTodoList((todos) => {
            return todos.filter((todo) => todo.id !== id);
        });
    },[]);
    const updateTodo = useCallback((id) => {
        //id를 가지고 todoList에 있는 id에 해당하는 done 값을 반대로 변경
        setTodoList((todos) => {
            return todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, done: !todo.done};
                }
                return todo;
            });
        });
    },[]);
    let id = useRef(6);
    const addTodo = useCallback((text) => {
        setTodoList((todos) => {
            return [...todos, {id: id.current++, text: text, done: false}];
        });
    },[]);
    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm addTodo={addTodo}/>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    );
}