import React, {useState, useCallback} from 'react';
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import {useAppDispatch} from "../hooks/hooks";
import {addTodo} from "../store/todo/todoSlice";

const TodoPage: React.FC= () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch()
    const handleAction = useCallback(() => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('')
        }
    }, [])
    return (
        <div className="bg-transparent shadow-xl py-4 rounded-lg w-2/6 max-h-[65%] min-h-[40%] px-6">
            <TodoAdd
                text={text}
                updateText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
};

export default TodoPage;