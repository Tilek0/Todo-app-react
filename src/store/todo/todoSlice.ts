import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import {todoList} from "../../types/todoType";
const mockStateForTesting: todoList = {
    list: [
        {text: 'first', id: '1', done: false},
        {text: 'second', id: '2', done: false},
        {text: 'third', id: '3', done: false},
    ]
}
const initialState: todoList = mockStateForTesting


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.unshift({
                id: new Date().toString(),
                text: action.payload,
                done: false
            })
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            let todo = state.list.find(todo => todo.id === action.payload)
            if (todo) {
                todo.done = !todo.done
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        removeDone(state) {
            state.list = state.list.filter(todo => !todo.done)
        }
    },
});

export const {
    addTodo,
    removeTodo,
    toggleTodo,
    removeDone } = todoSlice.actions;

export default todoSlice.reducer;
