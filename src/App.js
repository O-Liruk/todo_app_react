import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo_app">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
