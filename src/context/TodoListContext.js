import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    // state yg bisa dipakai secara "global"
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            text: todo,
            id: new Date().getTime(),
            status: false
        }
        setTodos([...todos].concat(newTodo));
    };

    const removeTodo = (todoId) => {
        const filterTodos = todos.filter((todo) => {
            return todo.id !== todoId;
        });
        setTodos(filterTodos);
    };

    const statusTodo = (todoId) => {
        const newStatus = todos.map((todo) => {
            if(todo.id === todoId){
                todo.status = !todo.status;
            }
            return todo;
        });
        setTodos(newStatus);
        console.log(todos);
    }

    const editTodoId = (todoId) => {
        setEditId(todoId);
    };

    const editTodoText = (text) => {
        setEditText(text);
        console.log(editText)
    };

    const editTodo = (todoId) => {
        const updatedTodo = todos.map((todo) => {
            if(todo.id === todoId){
                todo.text = editText;
            };
            return todo;
        });
        setTodos(updatedTodo);
        setEditId(null);
        setEditText("");
    }

    return (
        // mengikat component children sehingga bisa memakai value yg dipanggil (todos)
        <TodoListContext.Provider value={{todos, editId, addTodo, removeTodo, statusTodo, editTodoId, editTodoText, editTodo}}>
            {children}
        </TodoListContext.Provider>
    )
};

export default TodoListContextProvider;