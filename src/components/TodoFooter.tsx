import React from 'react';
import MyButton from "./UI/MyButton";
import {useAppDispatch} from "../hooks/hooks";
import {removeDone} from "../store/todo/todoSlice";
import {VisibilityFilter} from "../store/todo/VisibilityFilterSlice";
import MyButtonFilter from "./UI/MyButtonFilter";
type footerPropType = {
    length: number
}
const TodoFooter: React.FC<footerPropType> = ({length}) => {
    const dispatch = useAppDispatch()
    const clearCompleted = () => {
        dispatch(removeDone())
    }
    return (
        <div className='flex flex-row items-center w-full
         justify-between text-sm text-slate-400
          shadow h-8 px-2'>
            {length && <p>{length} : items left</p>}
            <div className='space-x-5'>
                <MyButtonFilter
                    px={'2'}
                    py={'1'}
                    VisibilityFilter={VisibilityFilter.ShowAll}
                >All</MyButtonFilter>
                <MyButtonFilter
                    px={'2'}
                    py={'1'}
                    VisibilityFilter={VisibilityFilter.ShowActive}
                >Active</MyButtonFilter>
                <MyButtonFilter
                    px={'2'}
                    py={'1'}
                    VisibilityFilter={VisibilityFilter.ShowDone}
                >Completed</MyButtonFilter>
            </div>
            <MyButton
                px={'2'}
                py={'1'}
                btnFunc={clearCompleted}
            >Clear completed</MyButton>
        </div>
    );
};

export default TodoFooter;