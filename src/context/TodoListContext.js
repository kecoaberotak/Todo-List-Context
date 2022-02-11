import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    // state yg bisa dipakai secara "global"
    const [todos, setTodos] = useState([
        {text: 'Makan', id: 1},
        {text: 'Main', id: 2},
        {text: 'Tidur', id: 3}
    ]);

    return (
        // mengikat component children sehingga bisa memakai value yg dipanggil (todos)
        <TodoListContext.Provider value={todos}>
            {children}
        </TodoListContext.Provider>
    )
};

export default TodoListContextProvider;