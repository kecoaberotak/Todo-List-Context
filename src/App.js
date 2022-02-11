import React from 'react';
import './App.css';
import TodoList from './component/TodoList';
import TodoListContextProvider from './context/TodoListContext';

function App() {
  return (
    <div className="App">
      <TodoListContextProvider>
        <TodoList/>
      </TodoListContextProvider>
    </div>
  );
}

export default App;
