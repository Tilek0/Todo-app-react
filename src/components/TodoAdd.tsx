import React from 'react';
import MyButton from "./UI/MyButton";

interface TodoFormProps {
    text: string
    updateText: (str: string) => void
    handleAction: () => void
}

const TodoAdd: React.FC<TodoFormProps> = ({text, updateText, handleAction}) => {
    return (
        <label className='flex justify-between mb-2 py-3 sticky'>
            <input
                type="text"
                data-testid='todoInput'
                placeholder='new todo'
                value={text}
                onChange={(e) => updateText(e.target.value)}
                className="outline-none border-none px-4 rounded-md
                text-slate-600 shadow-md grow placeholder-slate-400
                 focus:shadow-inner focus:ring-0 transition-all
                 duration-300 ease-in-out hover:shadow-lg"
            />
            <MyButton
                btnFunc={handleAction}
                px={'4'}
                py={'2'}
                shadow={'shadow-md'}
            >Add todo
            </MyButton>
        </label>
    );
};

export default TodoAdd;