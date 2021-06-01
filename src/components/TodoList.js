import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        // console.log(todo,...todos);
    }

    const updatedTodo = (todoId, newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }



    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>What's the Plans for Today? </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                updatedTodo={updatedTodo}
                removeTodo={removeTodo}
                todos={todos}
                completeTodo={completeTodo}
            />

        </div>
    )
}

export default TodoList
