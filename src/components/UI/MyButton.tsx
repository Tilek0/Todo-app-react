import React from 'react';

type BtnPropsType = {
    children: React.ReactNode
    btnFunc: () => void
    px: string
    py: string
    shadow?: string

}
const MyButton: React.FC<BtnPropsType> = ({
                                              children,
                                              px,
                                              py,
                                              shadow = '',
                                              btnFunc,
                                          }) => {
    return (
        <button
            onClick={btnFunc}
            data-testid='todoButton'
            className={`px-${px} py-${py} rounded-md 
            hover:shadow-lg
            active:shadow-inner text-slate-600 transition
            ease-in-out duration-300 ml-4 ${shadow}`}
        >{children}</button>
    );
};

export default MyButton;