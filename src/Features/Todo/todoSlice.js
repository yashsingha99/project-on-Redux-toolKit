import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
   todos:[]
}

export const todoSlice = createSlice ({
    name:'todo',
    initialState,
    reducers:{  // all functionalities
           addTodo: (state, action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload
             }
             state.todos.push(todo)
           },
           removeTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload)
           },
           updateTodo: (state, action) =>{
            state.todos = state.todos.map((prevtodo) => prevtodo.id === action.payload.Todos.id ? {...prevtodo, text:action.payload.todoMsg}  : prevtodo)
           },
           update:(state, action)=>{
             state.todos = action.payload
           }
    }
})

export const {addTodo, removeTodo, updateTodo, update} = todoSlice.actions
export default todoSlice.reducer
