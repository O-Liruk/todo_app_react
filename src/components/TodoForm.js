import React, { useState, useEffect, useRef } from 'react'
const todoBtn = 'todoBtn'
const todoInput = 'todoInput'
const todoForm = 'todoForm'
const edit = 'edit'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    return (
        <div>
            <form className={todoForm} onSubmit={handleSubmit} >
                {props.edit ? (
                    <>
                        <input
                            className={todoInput}
                            type="text"
                            placeholder="Add todo"
                            value={input}
                            name="text"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className={todoBtn + " " + edit}>Accept changes</button>
                    </>
                ) : <>
                    <input
                        className={todoInput}
                        type="text"
                        placeholder="Add todo"
                        value={input}
                        name="text"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className={todoBtn + " " + edit}>Add todo</button>
                </>}


            </form>
        </div>
    )
}

export default TodoForm
