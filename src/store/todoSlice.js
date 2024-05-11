import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, todo:"todo msg"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export {addTodo, removeTodo} from todoSlice.actions

export default todoSlice.reducer