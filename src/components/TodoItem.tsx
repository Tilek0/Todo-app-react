import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import {removeTodo, toggleTodo} from "../store/todo/todoSlice";
import {todoType} from "../types/todoType";
const TodoItem: React.FC<todoType> = ({id, text, done}) => {
    const dispatch = useAppDispatch()
    const handeChange = () => {
        dispatch(toggleTodo(id))
    }
    const remove = () => {
        dispatch(removeTodo(id))
    }
    return (
            <li className="flex justify-between w-full h-12 shadow px-4
            hover:shadow-inner mb-3 rounded-lg items-center">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={handeChange}
                    className='h-6 w-6 rounded-full text-lime-400
                     focus:ring-lime-400 border-lime-500 transition
                     duration-300 easy-in-out'
                />
                <span className={`${done ? 'line-through text-slate-300' : 'text-slate-600'}`}>{text}</span>
                <button
                    onClick={remove}
                    className='text-red-500 text-3xl hover:text-red-600'
                >&times;</button>
            </li>
    );
};

export default TodoItem;