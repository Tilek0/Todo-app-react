import { configureStore} from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice'
import visibilityFilterSlice from "./todo/VisibilityFilterSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilterSlice
  },
});
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
