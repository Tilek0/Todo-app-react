import React from 'react';
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import {setVisibilityFilter, VisibilityFilter} from "../../store/todo/VisibilityFilterSlice";
import {useAppDispatch} from "../../hooks/hooks";

type BtnPropsType = {
    children: React.ReactNode
    px: string
    py: string
    VisibilityFilter: VisibilityFilter
}
const MyButton: React.FC<BtnPropsType> = ({
                                              children,
                                              px,
                                              py,
                                              VisibilityFilter
                                          }) => {
    const dispatch = useAppDispatch()
    const currentVisibilityFilter = useSelector(
        (state: RootState) => state.visibilityFilterSlice
    );
    return (
        <button
            onClick={() => dispatch(setVisibilityFilter(VisibilityFilter))}
            data-testid='todoButtonFilter'
            className={`px-${px} py-${py}
            rounded-md hover:shadow-lg
            ${currentVisibilityFilter === VisibilityFilter ? 'ring-1' : ''}
            active:shadow-inner text-slate-600 transition
            ring-lime-400 ease-in-out duration-300 ml-4`}
        >{children}</button>
    );
};

export default MyButton;