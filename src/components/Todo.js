import React from 'react';
import '../App.css';

const Todo = ({todo, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const markCompletedHandler = () => {
        setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                    return { 
                        ...item,
                        isCompleted: !item.isCompleted
                    }
                }
                return item;
            })
        );
    }
    
    return(
        <div className='todo'>
            <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>{todo.text}</li>
            <button className='complete-btn' onClick={markCompletedHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;
