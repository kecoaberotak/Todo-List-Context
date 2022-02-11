import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const TodoList = () => {
    // memanggil property dari context agar bisa digunakan pada component ini
    const {todos} = useContext(TodoListContext);
    return(
        <div>
            {todos.length ? (
                todos.map((todo) => {
                    return <p key={todo.id}>{todo.text}</p>
                })
            ) : (
                "You Have No Todo!"
            )}
        </div>
    );
};

export default TodoList;