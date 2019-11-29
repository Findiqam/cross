import React from 'react'
import { connect } from 'react-redux'

let nextTodoTd=0
const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoTd++,
    text
})

const AddTodo=({dispatch})=>{
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)