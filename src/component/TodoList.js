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
            <br />
            <h1 className='ui teal header'>TODO LIST</h1>
            <br />
            {todos.length ? (
                todos.map((todo) => {
                    return <div key={todo.id} style={{margin:'2rem'}}>
                        {editId === todo.id ? (
                            <div className='ui input'>
                                <input type="text" onChange={handleSubmitEdit} />
                            </div>
                        ) : (
                            <h3>{todo.text}</h3>
                        )}
                        <div className='ui buttons'>
                            {editId === todo.id ? (
                                <button className='ui positive button' onClick={handleEdit.bind(this,todo.id)}>Submit Edit</button>
                            ) : (
                                <button className='ui positive button' onClick={handleEditId.bind(this,todo.id)}>Edit</button>
                            )}
                            <div className='or'></div>
                            <button className='ui negative button' onClick={handleRemoveTodo.bind(this,todo.id)}>Delete</button>
                        </div>
                        <div className='ui checked checkbox' style={{margin: '2rem'}}>
                            <input type="checkbox" onChange={handleStatus.bind(this,todo.id)} checked={todo.status}/>
                            <label>{todo.status ? (<h4>Selesai <i className='cn flag'></i></h4>) : (<h4>Belum Selesai <i className='kp flag'></i></h4>)}</label>
                        </div>
                    </div>
                })
            ) : (
                <>
                <h4 className='ui red header'>You Have No Todo!</h4>
                <br />
                </>
            )}
            <form onSubmit={handleFormSubmit}>
                <label className='ui teal header'  htmlFor="todo">Add Todo</label>
                <div className='ui input'>
                    <input type="text" onChange={handleChange}/>
                </div>
                <button className='ui button' type='submit'>Add New Todo</button>
            </form>
        </div>
    );
};

export default TodoList;