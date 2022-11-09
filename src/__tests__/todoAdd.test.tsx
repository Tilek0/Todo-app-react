import {fireEvent, render, screen} from "@testing-library/react";
import TodoAdd from "../components/TodoAdd";
import React, { useState } from "react";
import userEvent from "@testing-library/user-event";

describe('testing todoAdd page',() => {
    test('testing input and button element', () => {
        const text = ''
        const handleAction = jest.fn()
        const setText = jest.fn()
        render(<TodoAdd text={text} handleAction={handleAction} updateText={setText} />)
        const testInput = screen.getByTestId<HTMLInputElement>('todoInput')
        expect(testInput).toBeInTheDocument()

        const testButton = screen.queryByRole('button')
        expect(testButton).toBeInTheDocument()
        expect(screen.getByText(/Add todo/i)).toBeInTheDocument()
    })
    test('value of input', () => {
        const Wrapper: React.FC =  () => {
            const handleAction = jest.fn()
            const [text, setText] = useState<string>('')
            return <TodoAdd text={text} handleAction={handleAction} updateText={setText} />
        }

        render(< Wrapper />)

        const input = screen.getByTestId<HTMLInputElement>('todoInput')
        fireEvent.change(input, {target: {value: 'some text'}});
        expect(screen.getByTestId('todoInput')).toBeEnabled()
        // todo read value of input and be sure that value will be as expected

        const button = screen.getByTestId<HTMLElement>('todoButton')
        userEvent.click(button);
        expect(screen.getByTestId('todoButton')).toBeEnabled()

        screen.debug()
    })
})