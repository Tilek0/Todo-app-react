import React from 'react';
import './App.css';
import TodoPage from "./pages/TodoPage";

function App() {
    return (
    <div className="App flex justify-center items-center w-screen h-screen">
        <div id="modal-container"/>
        <TodoPage />
    </div>
  );
}

export default App;
