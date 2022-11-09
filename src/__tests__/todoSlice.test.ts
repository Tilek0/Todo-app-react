import store from '../store';
import {addTodo, removeTodo, toggleTodo, removeDone} from '../store/todo/todoSlice';


test('Add new todo', () => {
    store.dispatch(addTodo('some new text'))
    store.dispatch(addTodo('other new text'))
    const state = store.getState().todos.list
    let newText = state.find(todo => todo.text === 'other new text')
    expect(newText?.text).toBe('other new text')
    expect(state.length).toBe(5)
    expect(state.length).toBeLessThan(6)
});

test('Delete todo in list with Id', () => {
    const state = store.getState().todos.list
    const stateLength = state.length
    expect(stateLength).toBe(3)
    expect(state[0].text).toBe('first')
    const getId = state[0].id
    store.dispatch(removeTodo(getId))
    const newState = store.getState().todos.list
    expect(newState.length).toBe(2)
    expect(newState[0].text).not.toBe('first')
});

test('toggle to done and reverse todos', () => {
    store.dispatch(toggleTodo('1'))
    const state = store.getState().todos.list;
    expect(state[0].done).toBe(true)
    store.dispatch(toggleTodo('1'))
    const newState = store.getState().todos.list;
    expect(newState[0].done).toBe(false)
});

test('remove all done todos from list', () => {
    const state = store.getState().todos.list;
    expect(state.length).toBe(3)
    store.dispatch(toggleTodo('1'))
    store.dispatch(toggleTodo('2'))

    store.dispatch(removeDone())
    const newState = store.getState().todos.list;
    expect(newState.length).toBe(1)
});
