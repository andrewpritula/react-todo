import React from 'react';
import Todo from './Todo';
import '../App.css';

function TodoList({todos, setTodos, filteredTodos}){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
