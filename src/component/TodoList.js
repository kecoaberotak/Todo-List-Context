import React, { useContext, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const TodoList = () => {
    // state untuk menampung inputan user
    const [todo, setTodo] = useState("");
    // memanggil property dari context agar bisa digunakan pada component ini
    const {todos, editId, addTodo, removeTodo, statusTodo, editTodoId, editTodoText, editTodo} = useContext(TodoListContext);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    };

    const handleRemoveTodo = (todoId) => {
        removeTodo(todoId);
    };

    const handleStatus = (todoId) => {
        statusTodo(todoId);
    };

    const handleEditId = (todoId) => {
        editTodoId(todoId);
    };

    const handleSubmitEdit = (e) => {
        const text = e.target.value;
        editTodoText(text);
    };

    const handleEdit = (todoId) => {
        editTodo(todoId);
    };

    return(
        <div>
            <h1>TODO LIST</h1>
            {todos.length ? (
                todos.map((todo) => {
                    return <div key={todo.id}>
                        {editId === todo.id ? (
                            <input type="text" onChange={handleSubmitEdit} />
                        ) : (
                            <h3>{todo.text}</h3>
                        )}
                        {editId === todo.id ? (
                            <button onClick={handleEdit.bind(this,todo.id)}>Submit Edit</button>
                        ) : (
                            <button onClick={handleEditId.bind(this,todo.id)}>Edit</button>
                        )}                        
                        <button onClick={handleRemoveTodo.bind(this,todo.id)}>Delete</button>
                        <input type="checkbox" onChange={handleStatus.bind(this,todo.id)} checked={todo.status}/>
                        <label>{todo.status ? ("Selesai") : ("Belum Selesai")}</label>
                    </div>
                })
            ) : (
                <h4>You Have No Todo!</h4>
            )}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add Todo</label>
                <input type="text" onChange={handleChange}/>
                <button type='submit'>Add New Todo</button>
            </form>
        </div>
    );
};

export default TodoList;