import React from 'react';
import TodoItem from "./TodoItem";
import {useAppSelector} from "../hooks/hooks";
import {VisibilityFilter} from "../store/todo/VisibilityFilterSlice";
import {todoType} from "../types/todoType";
import {getVisibleTodos} from "../helpers/filterVisibleState";
import TodoFooter from "./TodoFooter";

const TodoList: React.FC = () => {
    const todos = useAppSelector(state =>
        getVisibleTodos<todoType,VisibilityFilter>
        (state.todos.list, state.visibilityFilterSlice))
    let todoLength = todos.length
    return (
        <>
            <ul
                style={{scrollbarWidth : "none"}}
                className='w-full h-[25rem] overflow-auto scroll-smooth myScroll'>
                {todos.map((todo: todoType) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </ul>
            <TodoFooter length={todoLength} />
        </>
    );
};

export default TodoList;