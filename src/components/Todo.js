import React, { useState } from 'react'
import { TiEdit } from 'react-icons/ti'
import { IoMdCloseCircle } from 'react-icons/io'
import TodoForm from './TodoForm'

const icons = "icons"
const deleteIcon = "deleteIcon"
const editIcon = "editIcon"
const todoRow = 'todoRow'
const complete = 'complete'

const Todo = ({ todos, completeTodo, removeTodo, updatedTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    const submitUpdate = value => {
        updatedTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index,) => (
        <div className={todo.isComplete ? todoRow + " " + complete : todoRow} key={index} >

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className={icons}>
                <IoMdCloseCircle
                    onClick={() => removeTodo(todo.id)}
                    className={deleteIcon}
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className={editIcon}
                />
            </div>
        </div>
    ))

}

export default Todo
